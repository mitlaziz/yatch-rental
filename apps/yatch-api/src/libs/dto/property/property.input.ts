import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, Length, IsInt, Min, IsEnum, IsArray, ArrayNotEmpty, IsNumber } from 'class-validator';
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
