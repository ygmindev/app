import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import { CHAT_RESOURCE_NAME } from '@lib/shared/chat/resources/Chat/Chat.constants';
import { type ChatFormModel, type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

export const CHAT_TABLE_PROPS = {
  columns: [{ id: 'name', type: DATA_TYPE.STRING }],
  name: CHAT_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<ChatModel, ChatFormModel>, 'implementation'>;
