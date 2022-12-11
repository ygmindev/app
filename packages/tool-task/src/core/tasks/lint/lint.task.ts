import type { TaskParamsModel } from '@lib/config/core/task/task.models';
import { runAll } from '@tool/task/core/templates/runAll/runAll';
import type { RunAllParamsModel } from '@tool/task/core/templates/runAll/runAll.models';

const lint: TaskParamsModel<RunAllParamsModel> = {
  ...runAll,
  name: 'lint',
  options: { patterns: [/lint/] },
};

export default lint;
