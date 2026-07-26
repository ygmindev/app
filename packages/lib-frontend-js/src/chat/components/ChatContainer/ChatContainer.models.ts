import { type ChatFormPropsModel } from '@lib/frontend/chat/components/ChatForm/ChatForm.models';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type ReactElement } from 'react';

export type ChatContainerPropsModel = {
  chat?: Partial<ChatModel>;
  chatFormElement?: ReactElement<ChatFormPropsModel>;
};
