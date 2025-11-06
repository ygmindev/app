import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { runAll } from '@tool/task/core/templates/runAll/runAll';
import { type RunAllParamsModel } from '@tool/task/core/templates/runAll/runAll.models';

const lint: TaskParamsModel<RunAllParamsModel> = merge(
  [
    {
      name: 'lint',

      overrides: () => ({
        patterns: [/lint/],
      }),

      task: ['build-config-typescript', 'build-config-lint'],
    },

    runAll,
  ],
  MERGE_STRATEGY.DEEP_PREPEND,
);

export default lint;
