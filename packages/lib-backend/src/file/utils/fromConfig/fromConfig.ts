import {
  type FromConfigModel,
  type FromConfigParamsModel,
} from '@lib/backend/file/utils/fromConfig/fromConfig.models';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';

export const fromConfig = (...paths: FromConfigParamsModel): FromConfigModel =>
  fromPackages('lib-config/src', ...paths);
