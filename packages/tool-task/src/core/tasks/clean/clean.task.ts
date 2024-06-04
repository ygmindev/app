import { type TaskParamsModel } from '@tool/task/core/core.models';
import { runAll } from '@tool/task/core/templates/runAll/runAll';
import { type RunAllParamsModel } from '@tool/task/core/templates/runAll/runAll.models';

const clean: TaskParamsModel<RunAllParamsModel> = {
  ...runAll,

  name: 'clean',

  overrides: () => ({
    patterns: [/clean/],
  }),
};

export default clean;
