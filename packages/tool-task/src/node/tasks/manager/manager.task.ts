import { command } from '@tool/task/core/utils/command/command';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';

const manager: RegisterParamsModel = {
  name: 'node-manager',

  task: async ({ root }) => {
    await command({
      command: `corepack enable \
        && corepack prepare yarn@stable --activate \
        && yarn set version stable \
        && yarn plugin import interactive-tools`,
      root,
    });
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};

export default manager;
