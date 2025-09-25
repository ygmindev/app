import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type UserModel } from '@lib/model/user/User/User.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type ChatContainerPropsModel = {
  chat: Partial<ChatModel>;
  currentUser?: Partial<UserModel>;
  messages?: PartialArrayModel<MessageModel>;
  onSubmit?(value: Partial<MessageModel>): Promise<void>;
};
