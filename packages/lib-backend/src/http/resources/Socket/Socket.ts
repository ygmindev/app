import { Chat } from '#lib-backend/chat/resources/Chat/Chat';
import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEmbeddableRootField } from '#lib-backend/resource/utils/withEmbeddableRootField/withEmbeddableRootField';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { CHAT_RESOURCE_NAME } from '#lib-shared/chat/resources/Chat/Chat.constants';
import { type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { SOCKET_RESOURCE_NAME } from '#lib-shared/http/resources/Socket/Socket.constants';
import { type SocketModel } from '#lib-shared/http/resources/Socket/Socket.models';

@withEntity({ isEmbeddable: true, isRepository: true, name: SOCKET_RESOURCE_NAME })
export class Socket extends EmbeddedResource implements SocketModel {
  @withEmbeddableRootField({ Resource: () => Chat })
  [CHAT_RESOURCE_NAME]?: ChatModel;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  id!: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  name?: string;
}
