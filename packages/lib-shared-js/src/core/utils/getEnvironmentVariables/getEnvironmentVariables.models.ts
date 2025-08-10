import { type EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type GetEnvironmentVariablesParamsModel = {
  envPrefix?: Array<string>;
  isPrefix?: boolean;
};

export type GetEnvironmentVariablesModel = PartialModel<EnvironmentConfigModel>;
