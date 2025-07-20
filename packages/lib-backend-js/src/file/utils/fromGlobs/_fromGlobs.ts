import {
  type _FromGlobsModel,
  type _FromGlobsParamsModel,
} from '@lib/backend/file/utils/fromGlobs/_fromGlobs.models';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { globSync } from 'glob';

export const _fromGlobs = (
  ...[globs, { exclude, isAbsolute = false, root = fromWorking() } = {}]: _FromGlobsParamsModel
): _FromGlobsModel =>
  globs.map((glob) => globSync(glob, { absolute: isAbsolute, cwd: root, ignore: exclude })).flat(1);
