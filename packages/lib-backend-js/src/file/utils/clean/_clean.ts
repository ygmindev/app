import {
  type _CleanModel,
  type _CleanParamsModel,
} from '@lib/backend/file/utils/clean/_clean.models';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { CLEAN_PATTERNS } from '@lib/config/file/file.constants';
import some from 'lodash/some';
import { join, resolve } from 'path';
import { rimraf } from 'rimraf';

export const _clean = async ({
  excludes,
  patterns,
  root = fromRoot(),
}: _CleanParamsModel): Promise<_CleanModel> => {
  const pwd = fromWorking();
  root && process.chdir(root);
  await rimraf(
    patterns ??
      CLEAN_PATTERNS.map((pattern) => [resolve(root, pattern), join(root, '**/*', pattern)]).flat(),
    {
      filter: excludes ? (path) => some(excludes, (exc) => !path.includes(exc)) : undefined,
      glob: true,
      preserveRoot: false,
    },
  );
  root && process.chdir(pwd);
};
