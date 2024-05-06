import {
  type FromModulesModel,
  type FromModulesParamsModel,
} from '@lib/backend/file/utils/fromModules/fromModules.models';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';

export const fromModules = (...paths: FromModulesParamsModel): FromModulesModel =>
  fromRoot('node_modules', ...paths);
