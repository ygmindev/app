import { type AIMessageModel } from '@lib/model/ai/LlmMessage/LlmMessage.models';
import { Message } from '@lib/model/chat/Message/Message.entity';

export class AIMessage extends Message implements AIMessageModel {}
