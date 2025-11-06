import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import pacakgeManagerConfig from '@lib/config/node/packageManager/packageManager';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type CleanParamsModel } from '@tool/task/core/tasks/clean/clean.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';

const clean: TaskParamsModel<CleanParamsModel> = {
  name: 'clean',

  task: [
    async ({ options, root }) =>
      runClean(
        merge(
          [
            options,
            { excludes: [pacakgeManagerConfig.params().modulesDir], root: root ?? fromRoot() },
          ],
          MERGE_STRATEGY.DEEP_APPEND,
        ),
      ),
  ],
};

export default clean;
