import type { TaskParamsModel } from '@tool/task/core/core.models';
import { runAll } from '@tool/task/core/templates/runAll/runAll';
import type { RunAllParamsModel } from '@tool/task/core/templates/runAll/runAll.models';

const lint: TaskParamsModel<RunAllParamsModel> = {
  ...runAll,

  name: 'lint',

  onBefore: ['make-json-typescript', 'make-json-lint'],

  options: { patterns: [/lint/] },
};

export default lint;
