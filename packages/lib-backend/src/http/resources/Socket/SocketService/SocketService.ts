import { createEmbeddedResourceService } from '#lib-backend/resource/utils/createEmbeddedResourceService/createEmbeddedResourceService';
import { ChatService } from '#lib-backend/chat/resources/Chat/ChatService/ChatService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { SOCKET_RESOURCE_NAME } from '#lib-shared/http/resources/Socket/Socket.constants';
import {
type  SocketFormModel,
  SocketModel,
} from '#lib-shared/http/resources/Socket/Socket.models';
import { type SocketServiceModel } from '#lib-shared/http/resources/Socket/SocketService/SocketService.models';
import { Socket } from '#lib-backend/http/resources/Socket/Socket';
import {
type  ChatFormModel,
  ChatModel,
} from '#lib-shared/chat/resources/Chat/Chat.models';

@withContainer()
export class SocketService
  extends createEmbeddedResourceService<
    SocketModel,
    SocketFormModel,
    ChatModel,
    ChatFormModel,
  >({
    Resource: Socket,
    RootService: ChatService,
    name: SOCKET_RESOURCE_NAME,
  })
  implements SocketServiceModel {}
