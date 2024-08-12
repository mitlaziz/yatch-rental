import { registerEnumType } from '@nestjs/graphql';

export enum ViewGroup {
	MEMBER = 'MEMBER',
	ARTICLE = 'ARTICLE',
	PROPERTY = 'PROPERTY',
	FAQ = 'FAQ',
	NOTICE = 'NOTICE',
}
registerEnumType(ViewGroup, {
	name: 'ViewGroup',
});
