import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type ChatFormPropsModel = {
  currentUser?: Partial<UserModel>;
  onAdd?(message: Partial<MessageModel>): Promise<void>;
};
