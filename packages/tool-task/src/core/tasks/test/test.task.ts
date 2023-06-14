import { config } from '#lib-config/core/setup/setup.node';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import type { TaskParamsModel } from '#tool-task/core/core.models';
import { runAll } from '#tool-task/core/templates/runAll/runAll';
import type { RunAllParamsModel } from '#tool-task/core/templates/runAll/runAll.models';

const test: TaskParamsModel<RunAllParamsModel> = {
  ...runAll,

  name: 'test',

  onAfter: [
    async () => {
      await config.onTerminate();
      return { status: TASK_STATUS.SUCCESS };
    },
  ],

  options: { patterns: [/test/] },
};

export default test;
