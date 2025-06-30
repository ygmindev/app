import { type ResourceTablePropsModel } from '@lib/frontend/resource/components/ResourceTable/ResourceTable.models';
import { CHAT_RESOURCE_NAME } from '@lib/model/chat/Chat/Chat.constants';
import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';

export const CHAT_TABLE_PROPS = {
  // columns: [{ id: 'name', type: DATA_TYPE.STRING }],
  name: CHAT_RESOURCE_NAME,
} satisfies Omit<ResourceTablePropsModel<ChatModel>, 'implementation'>;
