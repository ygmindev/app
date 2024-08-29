import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';

export const CHAT_RESOURCE_PARAMS = {
  fields: [],
  name: CHAT_RESOURCE_NAME,
} satisfies ResourceParamsModel<ChatModel>;
