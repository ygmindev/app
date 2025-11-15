import { type EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { type ENVIRONMENT } from '@lib/shared/environment/environment.constants';

export type EnvironmentParamsModel = {
  app?: string;
  environment?: ENVIRONMENT;
  overrrides?: Partial<EnvironmentConfigModel>;
};

export type EnvironmentModel = {
  variables: Partial<EnvironmentConfigModel>;
  initialize(params?: EnvironmentParamsModel): Promise<void>;
};
