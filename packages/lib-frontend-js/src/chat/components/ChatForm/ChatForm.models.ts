import { type ElementStatePropsModel } from '@lib/frontend/core/core.models';
import { type TextInputPropsModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type ChatFormPropsModel = ElementStatePropsModel &
  Pick<TextInputPropsModel, 'bottomElement' | 'placeholder'> & {
    currentUser?: Partial<UserModel>;
    onCancel?(): void;
    onSubmit?(message: Partial<MessageModel>): Promise<void>;
  };
