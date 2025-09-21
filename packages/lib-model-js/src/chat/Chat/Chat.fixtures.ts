import { type ChatModel } from '@lib/model/chat/Chat/Chat.models';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const CHAT_FIXTURES: Array<ChatModel> = getEntityResourceFixture({
  count: 5,
  data: ({ index }) => ({}),
});
