import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { webConfigParams } from '@lib/config/framework/web/params/web.params';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { command } from '@tool/task/core/utils/command/command';

export const make: TaskParamsModel = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'make',

  task: async ({ root }) => {
    await command({
      command: `${fromExecutable(webConfigParams.command)} build --config ${
        webConfigParams.configFile
      }`,
      root,
    });
    return { status: TASK_STATUS.SUCCESS };
  },
};
