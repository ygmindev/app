import { Session } from '#lib-backend/chat/resources/Session/Session';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEmbeddedResourceField } from '#lib-backend/resource/utils/withEmbeddedResourceField/withEmbeddedResourceField';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { CHAT_RESOURCE_NAME } from '#lib-shared/chat/resources/Chat/Chat.constants';
import { type ChatFormModel, type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';
import { SESSION_RESOURCE_NAME } from '#lib-shared/chat/resources/Session/Session.constants';
import { type SessionModel } from '#lib-shared/chat/resources/Session/Session.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';

@withEntity({ isRepository: true, name: CHAT_RESOURCE_NAME })
export class Chat extends EntityResource implements ChatModel {
  @withEmbeddedResourceField({ Resource: () => Session, root: CHAT_RESOURCE_NAME })
  [SESSION_RESOURCE_NAME]?: Array<SessionModel>;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${CHAT_RESOURCE_NAME}Form` })
export class ChatForm implements ChatFormModel {}
