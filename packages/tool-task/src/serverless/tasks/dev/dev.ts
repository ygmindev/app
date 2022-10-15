import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import type { DevParamsModel } from '@tool/task//serverless/tasks/dev/dev.models';
import { command } from '@tool/task/core/utils/command/command';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

export const dev: RegisterParamsModel<DevParamsModel> = {
  cleanups: ['database-close'],

  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: async () => {
    await command({ command: 'npx sls offline start --reloadHandler' });
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
