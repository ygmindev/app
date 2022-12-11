import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { runAll } from '@tool/task/core/templates/runAll/runAll';
import type { RunAllParamsModel } from '@tool/task/core/templates/runAll/runAll.models';

const clean: TaskParamsModel<RunAllParamsModel> = {
  ...runAll,
  name: 'clean',
  options: { patterns: [/clean/] },
};

export default clean;
