import { debug } from '@lib/shared/logging/utils/logger/logger';
import backup from '@tool/task/core/tasks/backup/backup.task';
import { command } from '@tool/task/core/utils/command/command';
import { TASK_RESULTS_STATUS_TYPE } from '@tool/task/core/utils/register/register.constants';
import type { RegisterParamsModel } from '@tool/task/core/utils/register/register.models';
import { NODE_UPGRADE_EXCLUDES } from '@tool/task/node/tasks/upgrade/upgrade.constants';
import { keys } from 'lodash';

const upgrade: RegisterParamsModel = {
  name: 'node-upgrade',

  task: async (context) => {
    debug(`Excluded packages: ${JSON.stringify(NODE_UPGRADE_EXCLUDES, null, '  ')}`);
    const upgrade = await command({
      command: `npx ncu -i -p yarn -x ${keys(NODE_UPGRADE_EXCLUDES).join(',')}`,
    });
    upgrade && (await backup.task({ ...context, options: { name: 'node-upgrade' } }));
    return { status: TASK_RESULTS_STATUS_TYPE.SUCCESS };
  },
};

export default upgrade;
