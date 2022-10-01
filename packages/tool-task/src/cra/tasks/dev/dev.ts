import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { command } from '@tool/task/core/utils/command/command';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import type { DevParamsModel } from '@tool/task/cra/tasks/dev/dev.models';

export const dev: RegisterParamsModel<DevParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: async ({ root }) => {
    await command({ command: `${fromExecutable('craco start')}`, root });
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
