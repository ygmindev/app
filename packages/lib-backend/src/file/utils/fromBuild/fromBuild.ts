import { FromBuildModel, FromBuildParamsModel } from '@lib/backend/file/utils/fromBuild/fromBuild.models';
import { config } from '@lib/config/core/file/file';
import { resolve } from 'path';

export const fromBuild = (...paths: FromBuildParamsModel): FromBuildModel =>
  resolve(config.buildDir, ...paths);
