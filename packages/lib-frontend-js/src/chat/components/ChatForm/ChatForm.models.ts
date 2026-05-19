import { type TextInputPropsModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type ChatFormPropsModel = Pick<TextInputPropsModel, 'bottomElement' | 'placeholder'> & {
  currentUser?: Partial<UserModel>;
  onSubmit?(message: Partial<MessageModel>): Promise<void>;
};
