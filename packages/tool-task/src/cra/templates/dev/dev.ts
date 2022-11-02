import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { command } from '@tool/task/core/utils/command/command';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import type { DevParamsModel } from '@tool/task/cra/templates/dev/dev.models';

export const dev: RegisterParamsModel<DevParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: async ({ options, root }) => {
    const port = getEnv(`REACT_APP_${options.name}_PORT`);
    process.env.PORT = port;

    await command({ command: `${fromExecutable('craco start')}`, root });
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
