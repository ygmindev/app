import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import { runAll } from '@tool/task/core/templates/runAll/runAll';
import type { RunAllParamsModel } from '@tool/task/core/templates/runAll/runAll.models';
import { setup } from '@tool/task/core/utils/setup/setup';

const test: TaskParamsModel<RunAllParamsModel> = {
  ...runAll,

  name: 'test',

  onAfter: [
    async () => {
      await setup.terminate();
      return { status: TASK_STATUS.SUCCESS };
    },
  ],

  options: { patterns: [/test/] },
};

export default test;
