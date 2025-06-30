import { type ProtectedResourceModel } from '@lib/model/auth/ProtectedResource/ProtectedResource.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type ChatModel = ProtectedResourceModel & {
  messsages?: CollectionModel<MessageModel>;

  name?: string;

  participants?: CollectionModel<UserModel>;
};
