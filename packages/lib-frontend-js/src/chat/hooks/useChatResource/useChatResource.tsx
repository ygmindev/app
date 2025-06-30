import { type UseChatResourceModel } from '@lib/frontend/chat/hooks/useChatResource/useChatResource.models';
import { CHAT_RESOURCE_PARAMS } from '@lib/frontend/chat/resources/Chat/Chat.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export const useChatResource = (): UseChatResourceModel =>
  useResource<ChatModel, UserModel>({
    ...CHAT_RESOURCE_PARAMS,
  });
