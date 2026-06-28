import {
  type LLM_PAYLOAD_TYPE,
  type MESSAGE_ROLE,
} from '@lib/model/ai/LlmPayload/LlmPayload.constants';
import { type DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

export type LlmPayloadModel = {
  chat_id: string;
  content: string;
  created: DateTime;
  message_id: string;
  role?: MESSAGE_ROLE;
  type: LLM_PAYLOAD_TYPE;
};
