import {
  type FromAssetsModel,
  type FromAssetsParamsModel,
} from '@lib/backend/file/utils/fromAssets/fromAssets.models';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { ASSETS_DIR, PUBLIC_DIR } from '@lib/config/file/file.constants';

export const fromAssets = (...paths: FromAssetsParamsModel): FromAssetsModel =>
  fromStatic(PUBLIC_DIR, ASSETS_DIR, ...paths);
