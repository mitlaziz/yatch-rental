import { Module } from '@nestjs/common';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
import { MongooseModule } from '@nestjs/mongoose';
import CommentSchema from '../../schemas/Comment.model';
import { AuthModule } from '../auth/auth.module';
import { MemberModule } from '../member/member.module';
import { PropertyModule } from '../property/property.module';
import { BoardArticleModule } from '../board-article/board-article.module';
import { NotificationModule } from '../notification/notification.module';
import { ViewModule } from '../view/view.module';
import MemberSchema from '../../schemas/Member.model';
import PropertySchema from '../../schemas/Property.model';
import BoardArticleSchema from '../../schemas/BoardArticle.model';
import ViewSchema from '../../schemas/View.model';

@Module({
	imports: [
		MongooseModule.forFeature([
			{
				name: 'Comment',
				schema: CommentSchema,
			},
		]),
		MongooseModule.forFeature([{ name: 'Member', schema: MemberSchema }]),
		MongooseModule.forFeature([{ name: 'Property', schema: PropertySchema }]),
		MongooseModule.forFeature([{ name: 'BoardArticle', schema: BoardArticleSchema }]),
		MongooseModule.forFeature([{ name: 'View', schema: ViewSchema }]),

		AuthModule,
		MemberModule,
		PropertyModule,
		ViewModule,
		BoardArticleModule,
		NotificationModule,
	],
	providers: [CommentResolver, CommentService],
})
export class CommentModule {}
