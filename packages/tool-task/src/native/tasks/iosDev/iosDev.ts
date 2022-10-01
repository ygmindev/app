import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { command } from '@tool/task/core/utils/command/command';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

export const iosDev: RegisterParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'iosDev',

  task: async ({ root }) => {
    await command({ command: fromExecutable('react-native run-ios'), root });
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
