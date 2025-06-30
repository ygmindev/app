import { type CollectionModel } from '@lib/model/core/Collection/Collection.models';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type MessageModel } from '@lib/shared/chat/resources/Message/Message.models';
import { type UserModel } from '@lib/shared/user/resources/User/User.models';

export type ChatModel = ProtectedResourceModel & {
  messsages?: CollectionModel<MessageModel>;

  name?: string;

  participants?: CollectionModel<UserModel>;
};
