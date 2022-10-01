import type { _FromGlobsParamsModel } from '@lib/backend/file/utils/fromGlobs/_fromGlobs.models';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { sync } from 'glob';

export const _fromGlobs = ({
  globs,
  root = fromWorking(),
  isAbsolute,
}: _FromGlobsParamsModel): Array<string> =>
  globs.map((glob) => sync(glob, { cwd: root, realpath: isAbsolute, strict: true })).flat(1);
