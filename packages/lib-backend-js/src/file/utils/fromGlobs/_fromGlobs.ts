import {
  type _FromGlobsModel,
  type _FromGlobsParamsModel,
} from '@lib/backend/file/utils/fromGlobs/_fromGlobs.models';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import fg from 'fast-glob';

export const _fromGlobs = (
  ...[globs, { isAbsolute = false, root = fromWorking() } = {}]: _FromGlobsParamsModel
): _FromGlobsModel =>
  globs.map((glob) => fg.globSync(glob, { absolute: isAbsolute, cwd: root })).flat(1);
