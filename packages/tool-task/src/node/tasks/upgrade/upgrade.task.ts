import { fromExecutable } from '#lib-backend/file/utils/fromExecutable/fromExecutable';
import { info } from '#lib-shared/logging/utils/logger/logger';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import type { TaskParamsModel } from '#tool-task/core/core.models';
import backup from '#tool-task/core/tasks/backup/backup.task';
import { command } from '#tool-task/core/utils/command/command';
import { NODE_UPGRADE_EXCLUDES } from '#tool-task/node/tasks/upgrade/upgrade.constants';

const upgrade: TaskParamsModel = {
  name: 'node-upgrade',

  task: async (context) => {
    info('excluded', NODE_UPGRADE_EXCLUDES);
    const upgrade = await command(
      `${fromExecutable('ncu')} --verbose -i -p yarn -x ${Object.keys(NODE_UPGRADE_EXCLUDES).join(
        ',',
      )}`,
    );
    upgrade && (await backup.task({ ...context, options: { name: 'node-upgrade' } }));
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default upgrade;
