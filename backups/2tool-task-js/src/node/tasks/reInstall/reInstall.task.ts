import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import fileConfig from '@lib/config/file/file';
import pacakgeManagerConfig from '@lib/config/node/packageManager/packageManager';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';

const reInstall: TaskParamsModel<unknown> = {
  name: 'node-re-install',

  task: [
    () =>
      runClean({
        patterns: [
          fromRoot(pacakgeManagerConfig.params().modulesDir),
          ...fileConfig
            .params()
            .packageDirs.map((v) => fromPackages(v, pacakgeManagerConfig.params().modulesDir)),
        ],
      }),

    () => pacakgeManagerConfig.params().installCommand(),
  ],
};

export default reInstall;
