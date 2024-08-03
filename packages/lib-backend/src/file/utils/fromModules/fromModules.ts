import {
  type FromModulesModel,
  type FromModulesParamsModel,
} from '@lib/backend/file/utils/fromModules/fromModules.models';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import pacakgeManagerConfig from '@lib/config/node/packageManager/packageManager';

export const fromModules = (...paths: FromModulesParamsModel): FromModulesModel =>
  fromRoot(pacakgeManagerConfig.params().modulesDir, ...paths);
