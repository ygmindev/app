import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export type ChatFormPropsModel = {
  onAdd?(message: Partial<MessageModel>): Promise<void>;
};
