import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { command } from '@tool/task/core/utils/command/command';

export const iosDev: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'iosDev',

  task: async ({ root }) => {
    await command({ command: fromExecutable('react-native run-ios'), root });
    return { status: TASK_STATUS.SUCCESS };
  },
};
