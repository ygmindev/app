import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { runAll } from '@tool/task/core/templates/runAll/runAll';
import type { RunAllParamsModel } from '@tool/task/core/templates/runAll/runAll.models';

const test: TaskParamsModel<RunAllParamsModel> = {
  ...runAll,
  name: 'test',
  options: { patterns: [/test/] },
};

export default test;