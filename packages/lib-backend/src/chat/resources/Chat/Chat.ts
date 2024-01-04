import { Socket } from '#lib-backend/http/resources/Socket/Socket';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEmbeddedResourceField } from '#lib-backend/resource/utils/withEmbeddedResourceField/withEmbeddedResourceField';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { CHAT_RESOURCE_NAME } from '#lib-shared/chat/resources/Chat/Chat.constants';
import { type ChatFormModel, type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { SOCKET_RESOURCE_NAME } from '#lib-shared/http/resources/Socket/Socket.constants';
import { type SocketModel } from '#lib-shared/http/resources/Socket/Socket.models';

@withEntity({ isRepository: true, name: CHAT_RESOURCE_NAME })
export class Chat extends EntityResource implements ChatModel {
  @withEmbeddedResourceField({ Resource: () => Socket, root: CHAT_RESOURCE_NAME })
  [SOCKET_RESOURCE_NAME]?: Array<SocketModel>;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${CHAT_RESOURCE_NAME}Form` })
export class ChatForm implements ChatFormModel {}
