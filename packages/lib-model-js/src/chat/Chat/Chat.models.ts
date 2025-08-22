import { type ProtectedResourceModel } from '@lib/model/auth/ProtectedResource/ProtectedResource.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type ChatModel = ProtectedResourceModel & {
  messsages?: PartialArrayModel<MessageModel>;

  name?: string;

  participants?: PartialArrayModel<UserModel>;
};
