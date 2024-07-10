import { InputType, Field, Int } from '@nestjs/graphql';
import {
	IsNotEmpty,
	IsOptional,
	Length,
	IsInt,
	Min,
	IsEnum,
	IsArray,
	ArrayNotEmpty,
	IsNumber,
	IsIn,
} from 'class-validator';
import { ObjectId } from 'mongoose';
import {
	PropertyAmenity,
	PropertyCategory,
	PropertyLocation,
	PropertyLocationView,
	PropertySize,
	PropertyStatus,
	PropertyType,
} from '../../enums/property.enum'; // Adjust the import path as necessary
import { availableOptions, availablePropertySorts } from '../../config';
import { Direction } from '../../enums/common.enum';

@InputType()
export class PropertyInput {
	@IsNotEmpty()
	@Field(() => PropertyType)
	@IsEnum(PropertyType)
	propertyType: PropertyType;

	@IsOptional()
	@Field(() => PropertyStatus, { nullable: true })
	@IsEnum(PropertyStatus)
	propertyStatus?: PropertyStatus;

	@IsNotEmpty()
	@Field(() => PropertyLocation)
	@IsEnum(PropertyLocation)
	propertyLocation: PropertyLocation;

	@IsNotEmpty()
	@Field(() => PropertyLocationView)
	@IsEnum(PropertyLocationView)
	propertyLocationView: PropertyLocationView;

	@IsNotEmpty()
	@Field(() => PropertySize)
	@IsEnum(PropertySize)
	propertySize: PropertySize;

	@IsNotEmpty()
	@Field(() => PropertyCategory)
	@IsEnum(PropertyCategory)
	propertyCategory: PropertyCategory;

	@IsNotEmpty()
	@Field(() => [String])
	@IsArray()
	@ArrayNotEmpty()
	@IsEnum(PropertyAmenity, { each: true })
	propertyAmenity: PropertyAmenity[];

	@IsNotEmpty()
	@Length(3, 100)
	@Field(() => String)
	propertyAddress: string;

	@IsNotEmpty()
	@Length(3, 100)
	@Field(() => String)
	propertyTitle: string;

	@IsNotEmpty()
	@Field(() => Number)
	@IsNumber()
	propertyPrice: number;

	@IsNotEmpty()
	@Field(() => Int)
	@IsInt()
	@Min(1)
	propertyCabins: number;

	@IsOptional()
	@Field(() => Int, { nullable: true })
	@IsInt()
	propertyViews?: number;

	@IsOptional()
	@Field(() => Int, { nullable: true })
	@IsInt()
	propertyLikes?: number;

	@IsOptional()
	@Field(() => Int, { nullable: true })
	@IsInt()
	propertyComments?: number;

	@IsOptional()
	@Field(() => Int, { nullable: true })
	@IsInt()
	propertyRank?: number;

	@IsNotEmpty()
	@Field(() => [String])
	@IsArray()
	@ArrayNotEmpty()
	propertyImages: string[];

	@IsOptional()
	@Length(5, 500)
	@Field(() => String, { nullable: true })
	propertyDesc?: string;

	@IsOptional()
	@Field(() => Boolean, { nullable: true })
	propertyBarter?: boolean;

	@IsOptional()
	@Field(() => Boolean, { nullable: true })
	propertyRent?: boolean;

	@IsOptional()
	@Field(() => Date, { nullable: true })
	constructedAt?: Date;

	memberId?: ObjectId;
}

@InputType()
export class PricesRange {
	@Field(() => Int)
	start: number;

	@Field(() => Int)
	end: number;
}

@InputType()
export class PeriodsRange {
	@Field(() => Date)
	start: Date;

	@Field(() => Date)
	end: Date;
}

@InputType()
export class PISearch {
	@IsOptional()
	@Field(() => String, { nullable: true })
	memberId?: ObjectId;

	@IsOptional()
	@Field(() => [PropertyLocation], { nullable: true })
	locationList?: PropertyLocation[];

	@IsOptional()
	@Field(() => [PropertyType], { nullable: true })
	typeList?: PropertyType[];

	@IsOptional()
	@Field(() => [PropertyCategory], { nullable: true })
	categoryList?: PropertyCategory[];

	@IsOptional()
	@Field(() => [Int], { nullable: true })
	cabinsList?: Number[];

	@IsOptional()
	@IsIn(availableOptions, { each: true })
	@Field(() => [String], { nullable: true })
	options?: string[];

	@IsOptional()
	@Field(() => PricesRange, { nullable: true })
	pricesRange?: PricesRange;

	@IsOptional()
	@Field(() => PeriodsRange, { nullable: true })
	periodsRange?: PeriodsRange;

	@IsOptional()
	@Field(() => String, { nullable: true })
	text?: string;
}

@InputType()
export class PropertiesInquiry {
	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	page: number;

	@IsNotEmpty()
	@Min(1)
	@Field(() => Int)
	limit: number;

	@IsOptional()
	@IsIn(availablePropertySorts)
	@Field(() => String, { nullable: true })
	sort?: string;

	@IsOptional()
	@Field(() => Direction, { nullable: true })
	direction?: Direction;

	@IsNotEmpty()
	@Field(() => PISearch, { nullable: true })
	search?: PISearch;
}
