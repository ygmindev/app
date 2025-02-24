import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type MESSAGE_RESOURCE_NAME } from '@lib/shared/chat/resources/Message/Message.constants';
import { type MessageModel } from '@lib/shared/chat/resources/Message/Message.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type ChatModel = ProtectedResourceModel & {
  [MESSAGE_RESOURCE_NAME]?: Array<RefFieldModel<MessageModel>>;

  name?: string;

  participants?: Array<RefFieldModel<UserModel>>;
};

export type ChatFormModel = EntityResourceDataModel<ChatModel>;
