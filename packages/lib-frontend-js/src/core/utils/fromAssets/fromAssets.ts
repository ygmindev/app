import { ASSETS_DIR } from '@lib/config/file/file.constants';
import {
  type FromAssetsModel,
  type FromAssetsParamsModel,
} from '@lib/frontend/core/utils/fromAssets/fromAssets.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';

export const fromAssets = (...params: FromAssetsParamsModel): FromAssetsModel =>
  filterNil(
    [ASSETS_DIR, ...(params ?? [])].map((v) => (v ? trimPathname(v, false) : undefined)),
  ).join('/');
