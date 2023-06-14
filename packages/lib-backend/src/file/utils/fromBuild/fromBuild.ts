import { join } from 'path';

import type {
  FromBuildModel,
  FromBuildParamsModel,
} from '#lib-backend/file/utils/fromBuild/fromBuild.models';
import { config } from '#lib-config/core/file/file';

export const fromBuild = (...paths: FromBuildParamsModel): FromBuildModel =>
  join(config.buildDir, ...paths);
