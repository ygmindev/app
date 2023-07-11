import some from 'lodash/some';
import { join, resolve } from 'path';
import { rimraf } from 'rimraf';

import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { config } from '#lib-config/core/file/file';
import {
  type _RunCleanModel,
  type _RunCleanParamsModel,
} from '#tool-task/core/utils/runClean/_runClean.models';

export const _runClean = async ({
  excludes,
  patterns,
  root = fromWorking(),
}: _RunCleanParamsModel): Promise<_RunCleanModel> => {
  await rimraf(
    patterns ||
      config.cleanPatterns
        .map((pattern) => [resolve(root, pattern), join(root, '**', pattern)])
        .flat(),
    {
      filter: excludes ? (path) => some(excludes, (exc) => !path.includes(exc)) : undefined,
      glob: true,
    },
  );
};
