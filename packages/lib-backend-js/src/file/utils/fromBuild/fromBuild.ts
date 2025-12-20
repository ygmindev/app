import {
  type FromBuildModel,
  type FromBuildParamsModel,
} from '@lib/backend/file/utils/fromBuild/fromBuild.models';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { BUILD_DIR } from '@lib/config/file/file.constants';

export const fromBuild = (...paths: FromBuildParamsModel): FromBuildModel =>
  fromRoot(BUILD_DIR, ...paths);
