import {
  type FromDistModel,
  type FromDistParamsModel,
} from '@lib/backend/file/utils/fromDist/fromDist.models';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { DIST_DIR } from '@lib/config/file/file.constants';

export const fromDist = (...paths: FromDistParamsModel): FromDistModel =>
  fromRoot(DIST_DIR, ...paths);
