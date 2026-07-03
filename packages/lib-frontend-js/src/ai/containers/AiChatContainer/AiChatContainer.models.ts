import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export type AiChatContainerPropsModel = {
  onSubmit?(data: Partial<MessageModel>): Promise<void>;
};
