import type {
  FromBuildModel,
  FromBuildParamsModel,
} from '#lib-backend/file/utils/fromBuild/fromBuild.models';
import { config } from '#lib-config/core/file/file';
import { join } from 'path';

export const fromBuild = (...paths: FromBuildParamsModel): FromBuildModel =>
  join(config.buildDir, ...paths);
