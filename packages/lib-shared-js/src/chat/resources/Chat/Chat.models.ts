import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type MessageModel } from '@lib/shared/chat/resources/Message/Message.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type ChatModel = ProtectedResourceModel & {
  messsages?: CollectionModel<MessageModel>;

  name?: string;

  participants?: CollectionModel<UserModel>;
};

export type ChatFormModel = EntityResourceDataModel<ChatModel>;
