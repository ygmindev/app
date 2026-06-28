import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type MESSAGE_ROLE } from '@lib/model/ai/LlmPayload/LlmPayload.constants';
import { type ProtectedResourceModel } from '@lib/model/auth/ProtectedResource/ProtectedResource.models';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type MESSAGE_STATUS } from '@lib/model/chat/Message/Message.constants';

export type MessageModel = ProtectedResourceModel & {
  chat?: RefModel<ChatModel>;

  content?: string;

  role?: MESSAGE_ROLE;

  status?: MESSAGE_STATUS;
};
