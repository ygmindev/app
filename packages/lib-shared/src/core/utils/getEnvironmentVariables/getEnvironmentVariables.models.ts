import { type EnvironmentConfigModel } from '@lib/config/core/environment/environment.models';
import { type PartialModel } from '@lib/shared/core/core.models';

export type GetEnvironmentVariablesParamsModel = {
  envPrefix?: Array<string> | string;
  isPrefix?: boolean;
};

export type GetEnvironmentVariablesModel = PartialModel<EnvironmentConfigModel>;
