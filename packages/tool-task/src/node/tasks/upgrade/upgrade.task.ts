import { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { debug } from '@lib/shared/logging/utils/logger/logger';
import backup from '@tool/task/core/tasks/backup/backup.task';
import { command } from '@tool/task/core/utils/command/command';
import { NODE_UPGRADE_EXCLUDES } from '@tool/task/node/tasks/upgrade/upgrade.constants';

const upgrade: TaskParamsModel = {
  name: 'node-upgrade',

  task: async (context) => {
    debug(`Excluded packages: ${JSON.stringify(NODE_UPGRADE_EXCLUDES, null, '  ')}`);
    const upgrade = await command({
      command: `npx ncu -i -p yarn -x ${Object.keys(NODE_UPGRADE_EXCLUDES).join(',')}`,
    });
    upgrade && (await backup.task({ ...context, options: { name: 'node-upgrade' } }));
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default upgrade;
