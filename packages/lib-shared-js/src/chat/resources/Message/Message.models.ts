import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type ProtectedResourceModel } from '@lib/shared/auth/resources/ProtectedResource/ProtectedResource.models';
import { type CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type MessageModel = ProtectedResourceModel & {
  [CHAT_RESOURCE_NAME]: RefFieldModel<ChatModel>;

  text?: string;
};

export type MessageFormModel = EntityResourceDataModel<MessageModel>;
