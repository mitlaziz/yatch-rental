import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	SINGLE = 'SINGLE',
	PREMIUM = 'PREMIUM',
	VIP = 'VIP',
}
registerEnumType(PropertyType, {
	name: 'PropertyType',
});

export enum PropertyStatus {
	HOLD = 'HOLD',
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyLocation {
	SEOUL = 'SEOUL',
	BUSAN = 'BUSAN',
	INCHEON = 'INCHEON',
	DAEGU = 'DAEGU',
	GYEONGJU = 'GYEONGJU',
	GWANGJU = 'GWANGJU',
	CHONJU = 'CHONJU',
	DAEJON = 'DAEJON',
	JEJU = 'JEJU',
}
registerEnumType(PropertyLocation, {
	name: 'PropertyLocation',
});

export enum PropertyAmenity {
	POOL = 'POOL',
	WIFI = 'WIFI',
	NON_SMOKING = 'NON_SMOKING',
	GYM = 'GYM',
	YACHT_SERVICE = 'YACHT_SERVICE',
	FREE_PARKING = 'FREE_PARKING',
	RESTAURANT = 'RESTAURANT',
	ALWAYS_FRONT_DESK = 'ALWAYS_FRONT_DESK',
	SPA = 'SPA',
}
registerEnumType(PropertyAmenity, {
	name: 'PropertyAmenity',
});

export enum PropertySize {
	SMALL = 'SMALL', // Up to 30 feet
	MEDIUM = 'MEDIUM', // 31-60 feet
	LARGE = 'LARGE', // 61-100 feet
	MEGA = 'MEGA', // Over 100 feet
}
registerEnumType(PropertySize, {
	name: 'PropertySize',
});

export enum PropertyCategory {
	MOTOR = 'MOTOR',
	SAIL = 'SAIL',
	CATAMARAN = 'CATAMARAN',
	GULET = 'GULET',
}
registerEnumType(PropertyCategory, {
	name: 'PropertyCategory',
});

export enum PropertyLocationView {
	SEA = 'SEA',
	CITY = 'CITY',
	MOUNTAIN = 'MOUNTAIN',
	GARDEN = 'GARDEN',
	POOL = 'POOL',
}
registerEnumType(PropertyLocationView, {
	name: 'PropertyLocationView',
});
