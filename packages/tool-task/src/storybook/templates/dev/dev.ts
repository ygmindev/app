import { APP_NAME } from '@app/web-storybook/app/app.constants';
import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { command } from '@tool/task/core/utils/command/command';
import { portIsOpen } from '@tool/task/core/utils/portIsOpen/portIsOpen';
import { toNumber } from 'lodash';

export const dev: TaskParamsModel = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'dev',

  task: async ({ root }) => {
    const port = toNumber(getEnv(`APP_${APP_NAME}_PORT`));
    (await portIsOpen(port)) &&
      (await command({
        command: `${fromExecutable(
          'start-storybook',
        )} -c src/storybook -p ${port} --no-manager-cache`,

        root,
      }));
    return { status: TASK_STATUS.SUCCESS };
  },
};
