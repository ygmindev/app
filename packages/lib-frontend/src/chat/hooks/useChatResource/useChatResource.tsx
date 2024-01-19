import { type UseChatResourceModel } from '@lib/frontend/chat/hooks/useChatResource/useChatResource.models';
import { CHAT_RESOURCE_PARAMS } from '@lib/frontend/chat/resources/Chat/Chat.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type ChatFormModel, type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';

export const useChatResource = (): UseChatResourceModel =>
  useResource<ChatModel, ChatFormModel>({
    ...CHAT_RESOURCE_PARAMS,
  });
