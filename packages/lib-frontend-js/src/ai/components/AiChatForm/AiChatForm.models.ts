import { type ChatFormPropsModel } from '@lib/frontend/chat/components/ChatForm/ChatForm.models';

export type AiChatFormPropsModel = Pick<ChatFormPropsModel, 'onSubmit'>;
