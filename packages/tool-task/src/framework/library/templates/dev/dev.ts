import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { command } from '@tool/task/core/utils/command/command';
import { portIsOpen } from '@tool/task/core/utils/portIsOpen/portIsOpen';

export const dev: TaskParamsModel = {
  name: 'dev',

  task: async ({ root }) => {
    const port = process.env[`APP_${process.env.ENV_NAME}_PORT`] || '';
    (await portIsOpen(port)) &&
      (await command({
        command: `${fromExecutable('sb dev')} -c src/storybook -p ${port} --no-manager-cache`,

        root,
      }));
    return { status: TASK_STATUS.SUCCESS };
  },
};
