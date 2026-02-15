import { type EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { type BootstrappableModel } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable.models';
import { type ENVIRONMENT } from '@lib/shared/environment/environment.constants';

export type EnvironmentParamsModel = {
  app?: string;
  environment?: ENVIRONMENT;
  overrrides?: Partial<EnvironmentConfigModel>;
};

export type EnvironmentModel = BootstrappableModel & {
  variables: Partial<EnvironmentConfigModel>;
  exportEnv(pathname: string): void;
  initialize(params?: EnvironmentParamsModel): Promise<void>;
  reset(): void;
};
