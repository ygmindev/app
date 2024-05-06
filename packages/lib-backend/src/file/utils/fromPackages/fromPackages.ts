import {
  type FromPackagesModel,
  type FromPackagesParamsModel,
} from '@lib/backend/file/utils/fromPackages/fromPackages.models';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';

export const fromPackages = (...paths: FromPackagesParamsModel): FromPackagesModel =>
  fromRoot('packages', ...paths);
