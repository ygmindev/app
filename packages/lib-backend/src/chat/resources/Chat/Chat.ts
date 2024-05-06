import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isRepository: true, name: CHAT_RESOURCE_NAME })
export class Chat extends EntityResource implements ChatModel {
  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  name?: string;
}
