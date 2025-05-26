import {
  type FromAssetsModel,
  type FromAssetsParamsModel,
} from '@lib/backend/file/utils/fromPublic/fromPublic.models';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { PUBLIC_DIR } from '@lib/config/file/file.constants';

export const fromPublic = (...paths: FromAssetsParamsModel): FromAssetsModel =>
  fromStatic(PUBLIC_DIR, ...paths);
