import type { _FromGlobsParamsModel } from '@lib/backend/file/utils/fromGlobs/_fromGlobs.models';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { globSync } from 'glob';

export const _fromGlobs = ({
  globs,
  isAbsolute,
  root = fromWorking(),
}: _FromGlobsParamsModel): Array<string> =>
  globs.map((glob) => globSync(glob, { absolute: isAbsolute, cwd: root })).flat(1);
