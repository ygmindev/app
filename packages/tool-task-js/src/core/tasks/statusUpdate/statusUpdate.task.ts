import { LOG_MESSAGE_TYPE } from '@lib/model/logging/LogMessage/LogMessage.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type StatusUpdateModel,
  type StatusUpdateParamsModel,
} from '@tool/task/core/tasks/statusUpdate/statusUpdate.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';

export const statusUpdate = buildTask({
  task: async ({ type }: StatusUpdateParamsModel): Promise<StatusUpdateModel> => {
    switch (type) {
      case LOG_MESSAGE_TYPE.SUCCESS: {
        logger.success('success');
        break;
      }
      case LOG_MESSAGE_TYPE.FAIL: {
        logger.fail('fail');
        break;
      }
    }
  },
});
