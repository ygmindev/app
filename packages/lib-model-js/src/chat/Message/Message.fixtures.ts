import { CHAT_FIXTURES } from '@lib/model/chat/Chat/Chat.fixtures';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { USER_FIXTURE } from '@lib/model/user/User/User.fixtures';
import { DATE_UNIT, TIME_UNIT } from '@lib/shared/datetime/datetime.constants';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { dateTimeAdd } from '@lib/shared/datetime/utils/dateTimeAdd/dateTimeAdd';
import { getEntityResourceFixture } from '@lib/shared/test/utils/getEntityResourceFixture/getEntityResourceFixture';

export const MESSAGE_FIXTURES: Array<MessageModel> = getEntityResourceFixture({
  count: 5,
  data: ({ index }) => {
    const result: Partial<MessageModel> = {
      chat: { _id: CHAT_FIXTURES[0]._id },

      created: new DateTime(),

      createdBy: undefined,

      text: `Message ${index}`,
    };
    switch (index) {
      case 0: {
        result.created = dateTimeAdd(new DateTime(), { [DATE_UNIT.DAY]: -1 });
        break;
      }
      case 1: {
        result.created = dateTimeAdd(new DateTime(), { [TIME_UNIT.HOUR]: -1 });
        break;
      }
      case 2: {
        result.created = dateTimeAdd(new DateTime(), { [TIME_UNIT.MINUTE]: -1 });
        break;
      }
      case 4: {
        result.createdBy = USER_FIXTURE;
        break;
      }
    }
    return result as MessageModel;
  },
});
