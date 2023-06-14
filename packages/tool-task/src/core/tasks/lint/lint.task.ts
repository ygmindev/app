import type { TaskParamsModel } from '#tool-task/core/core.models';
import { runAll } from '#tool-task/core/templates/runAll/runAll';
import type { RunAllParamsModel } from '#tool-task/core/templates/runAll/runAll.models';

const lint: TaskParamsModel<RunAllParamsModel> = {
  ...runAll,

  name: 'lint',

  onBefore: ['build-json-typescript', 'build-json-lint'],

  options: { patterns: [/lint/] },
};

export default lint;
