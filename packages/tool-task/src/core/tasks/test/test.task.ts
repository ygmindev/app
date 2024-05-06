import { type TaskParamsModel } from '@tool/task/core/core.models';
import { runAll } from '@tool/task/core/templates/runAll/runAll';
import { type RunAllParamsModel } from '@tool/task/core/templates/runAll/runAll.models';

const test: TaskParamsModel<RunAllParamsModel> = {
  ...runAll,

  name: 'test',

  overrides: {
    patterns: [/test/],
  },
};

export default test;
