import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { FILE_CONFIG } from '@lib/config/file/file.constants';
import {
  type _RunCleanModel,
  type _RunCleanParamsModel,
} from '@tool/task/core/utils/runClean/_runClean.models';
import some from 'lodash/some';
import { join, resolve } from 'path';
import { rimraf } from 'rimraf';

export const _runClean = async ({
  excludes,
  patterns,
  root = fromWorking(),
}: _RunCleanParamsModel): Promise<_RunCleanModel> => {
  const pwd = fromWorking();
  root && process.chdir(root);
  await rimraf(
    patterns ??
      FILE_CONFIG.cleanPatterns
        .map((pattern) => [resolve(root, pattern), join(root, '**/*', pattern)])
        .flat(),
    {
      filter: excludes ? (path) => some(excludes, (exc) => !path.includes(exc)) : undefined,
      glob: true,
      preserveRoot: false,
    },
  );
  root && process.chdir(pwd);
};
