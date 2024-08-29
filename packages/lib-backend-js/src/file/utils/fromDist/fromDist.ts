import {
  type FromDistModel,
  type FromDistParamsModel,
} from '@lib/backend/file/utils/fromDist/fromDist.models';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { FILE_CONFIG } from '@lib/config/file/file.constants';

export const fromDist = (...paths: FromDistParamsModel): FromDistModel =>
  fromRoot(FILE_CONFIG.distDir, ...paths);
