import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import {
  type FromStaticModel,
  type FromStaticParamsModel,
} from '@lib/backend/file/utils/fromStatic/fromStatic.models';

export const fromStatic = (...paths: FromStaticParamsModel): FromStaticModel =>
  fromPackages('asset-static', ...paths);
