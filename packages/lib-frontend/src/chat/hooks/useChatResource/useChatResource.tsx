import { CHAT_FIELDS } from '#lib-frontend/chat/hooks/useChatResource/useChatResource.constants';
import { type UseChatResourceModel } from '#lib-frontend/chat/hooks/useChatResource/useChatResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { CHAT_RESOURCE_NAME } from '#lib-shared/chat/resources/Chat/Chat.constants';
import {
  type ChatFormModel,
  type ChatModel,
} from '#lib-shared/chat/resources/Chat/Chat.models';

export const useChatResource = (): UseChatResourceModel =>
  useResource<ChatModel, ChatFormModel>({
    fields: [{ result: CHAT_FIELDS }],
    name: CHAT_RESOURCE_NAME,
  });
