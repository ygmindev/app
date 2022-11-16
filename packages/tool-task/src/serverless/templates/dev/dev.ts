import { cleanup } from '@lib/backend/setup/utils/cleanup/cleanup';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { command } from '@tool/task/core/utils/command/command';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import type { DevParamsModel } from '@tool/task/serverless/templates/dev/dev.models';

export const dev: RegisterParamsModel<DevParamsModel> = {
  cleanups: [cleanup],

  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: async () => {
    await command({ command: 'npx sls offline start --reloadHandler' });
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
