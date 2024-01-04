import { SOCKET_FIELDS } from '#lib-frontend/http/hooks/useSocketResource/useSocketResource.constants';
import { type UseSocketResourceModel } from '#lib-frontend/http/hooks/useSocketResource/useSocketResource.models';
import { useResource } from '#lib-frontend/resource/hooks/useResource/useResource';
import { SOCKET_RESOURCE_NAME } from '#lib-shared/http/resources/Socket/Socket.constants';
import {
  type SocketFormModel,
  type SocketModel,
} from '#lib-shared/http/resources/Socket/Socket.models';
import { type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';
import { CHAT_RESOURCE_NAME } from '#lib-shared/chat/resources/Chat/Chat.constants';

export const useSocketResource = (): UseSocketResourceModel =>
  useResource<SocketModel, SocketFormModel, ChatModel>({
    fields: [{ result: SOCKET_FIELDS }],
    name: SOCKET_RESOURCE_NAME,
    root: CHAT_RESOURCE_NAME,
  });
