import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { Socket } from '#lib-backend/http/resources/Socket/Socket';
import { type SocketResolverModel } from '#lib-backend/http/resources/Socket/SocketResolver/SocketResolver.models';
import { SocketService } from '#lib-backend/http/resources/Socket/SocketService/SocketService';
import { Chat } from '#lib-backend/chat/resources/Chat/Chat';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEmbeddedResourceResolver } from '#lib-backend/resource/utils/createEmbeddedResourceResolver/createEmbeddedResourceResolver';
import { SOCKET_RESOURCE_NAME } from '#lib-shared/http/resources/Socket/Socket.constants';
import {
  type SocketFormModel,
  type SocketModel,
} from '#lib-shared/http/resources/Socket/Socket.models';
import { type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';

@withContainer()
@withResolver({ Resource: () => Socket })
export class SocketResolver
  extends createEmbeddedResourceResolver<SocketModel, SocketFormModel, ChatModel>({
    Resource: () => Socket,
    ResourceService: SocketService,
    RootResource: () => Chat,
    name: SOCKET_RESOURCE_NAME,
  })
  implements SocketResolverModel {}
