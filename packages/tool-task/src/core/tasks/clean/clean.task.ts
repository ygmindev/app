import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import type { TaskParamsModel } from '@tool/task/core/core.models';
import type { CleanParamsModel } from '@tool/task/core/tasks/clean/clean.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';

const clean: TaskParamsModel<CleanParamsModel> = {
  name: 'clean',

  task: async ({ options }) => await runClean({ ...options, excludes: ['node_modules'], root: fromRoot() }),
};

export default clean;
