import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type ChatContainerPropsModel = {
  currentUser?: Partial<UserModel>;
  messages?: PartialArrayModel<MessageModel>;
};
