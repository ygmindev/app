import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type MessageModel = ProtectedResourceModel & {
  chat: RefFieldModel<ChatModel>;

  text?: string;
};

export type MessageFormModel = EntityResourceDataModel<MessageModel>;
