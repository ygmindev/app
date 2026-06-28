import { type UseChatModel } from '@lib/frontend/ai/hooks/useChat/useChat.models';
import { type ChatFormPropsModel } from '@lib/frontend/chat/components/ChatForm/ChatForm.models';

export type AiChatFormPropsModel = ChatFormPropsModel & Pick<UseChatModel, 'isStreaming'>;
