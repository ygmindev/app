import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import fileConfig from '@lib/config/file/file';
import pacakgeManagerConfig from '@lib/config/node/packageManager/packageManager';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { runClean } from '@tool/task/core/utils/runClean/runClean';

const reInstall: TaskParamsModel<unknown> = {
  name: 'node-re-install',

  task: [
    () => pacakgeManagerConfig.params().installCommand(),

    () =>
      runClean({
        patterns: [
          pacakgeManagerConfig.params().modulesDir,
          ...fileConfig
            .params()
            .packageDirs.map((v) => joinPaths([v, pacakgeManagerConfig.params().modulesDir])),
        ],
      }),
  ],
};

export default reInstall;
