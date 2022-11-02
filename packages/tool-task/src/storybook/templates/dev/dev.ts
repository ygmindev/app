import { APP_NAME } from '@app/web-storybook/app/app.constants';
import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { command } from '@tool/task/core/utils/command/command';
import { portIsOpen } from '@tool/task/core/utils/portIsOpen/portIsOpen';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import { toNumber } from 'lodash';

export const dev: RegisterParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: async ({ root }) => {
    const port = toNumber(getEnv(`REACT_APP_${APP_NAME}_PORT`));
    (await portIsOpen(port)) &&
      (await command({
        command: `${fromExecutable(
          'start-storybook',
        )} -c src/storybook -p ${port} --no-manager-cache`,

        root,
      }));
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};
