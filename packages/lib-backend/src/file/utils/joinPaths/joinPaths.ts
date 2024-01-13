import trimStart from 'lodash/trimStart';
import { join } from 'path';

import {
  type JoinPathsModel,
  type JoinPathsParamsModel,
} from '@lib-backend/file/utils/joinPaths/joinPaths.models';
import { filterNil } from '@lib-shared/core/utils/filterNil/filterNil';

export const joinPaths = (...[paths, options]: JoinPathsParamsModel): JoinPathsModel => {
  let path = join(...filterNil(paths));
  options?.extension && (path = `${path}.${trimStart(options.extension, '.')}`);
  return path;
};
