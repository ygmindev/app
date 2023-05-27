import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';
import install from '@tool/task/node/tasks/install/install.task';
import type { ReInstallParamsModel } from '@tool/task/node/tasks/reInstall/reInstall.models';

const reInstall: TaskParamsModel<ReInstallParamsModel> = {
  name: 'node-re-install',

  task: async () => {
    await runClean({ patterns: ['node_modules'], root: fromRoot() });
    await install.task({ options: { install: '*', installDev: '', remove: '' }, root: fromRoot() });
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default reInstall;
