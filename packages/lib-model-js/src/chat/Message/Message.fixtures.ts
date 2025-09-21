import { CHAT_FIXTURES } from '@lib/model/chat/Chat/Chat.fixtures';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { DATE_UNIT, TIME_UNIT } from '@lib/shared/datetime/datetime.constants';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { dateTimeAdd } from '@lib/shared/datetime/utils/dateTimeAdd/dateTimeAdd';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const MESSAGE_FIXTURES: Array<MessageModel> = getEntityResourceFixture({
  count: 5,
  data: ({ index }) => {
    let created = new DateTime();
    switch (index) {
      case 1: {
        created = dateTimeAdd(created, { [DATE_UNIT.DAY]: -1 });
        break;
      }
      case 2: {
        created = dateTimeAdd(created, { [TIME_UNIT.HOUR]: -1 });
        break;
      }
      case 3: {
        created = dateTimeAdd(created, { [TIME_UNIT.MINUTE]: -1 });
        break;
      }
    }
    return {
      chat: { _id: CHAT_FIXTURES[0]._id },

      created,

      text: `Message ${index}`,
    };
  },
});
