import { TASK_STATUS } from '#tool-task/core/core.constants';
import type { TaskParamsModel } from '#tool-task/core/core.models';
import { command } from '#tool-task/core/utils/command/command';

import { fromExecutable } from '#lib-backend/file/utils/fromExecutable/fromExecutable';
import { ENVIRONMENT } from '#lib-shared/environment/environment.constants';

export const iosDev: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'iosDev',

  task: async ({ root }) => {
    await command(fromExecutable('react-native run-ios'), { root });
    return { status: TASK_STATUS.SUCCESS };
  },
};
