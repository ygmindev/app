import {
  type LlmPayloadType,
  type MessageRole,
} from '@lib/model/ai/LlmPayload/LlmPayload.constants';

export type LlmPayloadModel = {
  chat_id: string;
  content: string;
  message_id: string;
  role?: MessageRole;
  type: LlmPayloadType;
};
