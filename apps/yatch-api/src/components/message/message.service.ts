import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Member } from '../../libs/dto/member/member';
import { Messages } from '../../libs/dto/send-message/message';
import { MemberService } from '../member/member.service';
import { NotificationService } from '../notification/notification.service';
import { MessageInput } from '../../libs/dto/send-message/message.input';
import { PropertyService } from '../property/property.service';
import { Property } from '../../libs/dto/property/property';
import { NotificationInput } from '../../libs/dto/notification/notification.input';
import { NotificationGroup, NotificationStatus, NotificationType } from '../../libs/enums/notification.enum';
import { shapeIntoMongoObjectId } from '../../libs/config';
import { Message } from '../../libs/enums/common.enum';

@Injectable()
export class MessageService {
	constructor(
		@InjectModel('Message') private readonly messageModel: Model<Messages>,
		@InjectModel('Property') private readonly propertyModel: Model<Property>,

		private notificationService: NotificationService,
	) {}

	public async createMessage(memberId: ObjectId, input: MessageInput): Promise<Messages> {
		input.memberId = memberId;
		try {
			const result = await this.messageModel.create(input);

			const property = await this.propertyModel.findOne({ _id: input.propertyId }).exec();
			if (!property) throw new NotFoundException('Property not found');
			const propertyId = shapeIntoMongoObjectId(input.propertyId);
			const notificationInput: NotificationInput = {
				notificationType: NotificationType.MESSAGE,
				notificationStatus: NotificationStatus.WAIT,
				notificationGroup: NotificationGroup.PROPERTY,
				notificationTitle: 'New Message',
				notificationDesc: `
                  You have a new message regarding your property ${property.propertyTitle}:
                  Name: ${input.name}
                  Email: ${input.email}
                  Phone: ${input.phone}
                  Message: ${input.message}
                `,
				authorId: memberId,
				receiverId: property.memberId,
				propertyId: propertyId,
			};

			await this.notificationService.createNotification(notificationInput);
			return result;
		} catch (err) {
			console.log('Error service.model:', err.message);
			throw new BadRequestException(Message.CREATE_FAILED);
		}
	}
}
