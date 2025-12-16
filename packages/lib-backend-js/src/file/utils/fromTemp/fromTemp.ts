import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import {
  type FromTempModel,
  type FromTempParamsModel,
} from '@lib/backend/file/utils/fromTemp/fromTemp.models';
import { TEMP_DIR } from '@lib/config/file/file.constants';

export const fromTemp = (...paths: FromTempParamsModel): FromTempModel =>
  fromRoot(TEMP_DIR, ...paths);
