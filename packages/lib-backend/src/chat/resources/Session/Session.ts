import { Chat } from '#lib-backend/chat/resources/Chat/Chat';
import { EmbeddedResource } from '#lib-backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '#lib-backend/resource/utils/withField/withField.constants';
import { CHAT_RESOURCE_NAME } from '#lib-shared/chat/resources/Chat/Chat.constants';
import { type ChatModel } from '#lib-shared/chat/resources/Chat/Chat.models';
import { SESSION_RESOURCE_NAME } from '#lib-shared/chat/resources/Session/Session.constants';
import { type SessionModel } from '#lib-shared/chat/resources/Session/Session.models';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';

@withEntity({ isEmbeddable: true, isRepository: true, name: SESSION_RESOURCE_NAME })
export class Session extends EmbeddedResource implements SessionModel {
  @withField({
    Resource: () => Chat,
    isOptional: true,
    isRepository: true,
    relation: FIELD_RELATION.MANY_TO_ONE,
    type: PROPERTY_TYPE.RESOURCE,
  })
  [CHAT_RESOURCE_NAME]?: ChatModel;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  id!: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  name?: string;
}
