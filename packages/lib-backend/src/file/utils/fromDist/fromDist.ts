import {
  type FromDistModel,
  type FromDistParamsModel,
} from '@lib/backend/file/utils/fromDist/fromDist.models';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { config } from '@lib/config/core/file/file';

export const fromDist = (...paths: FromDistParamsModel): FromDistModel =>
  fromRoot(config.distPath, ...paths);
