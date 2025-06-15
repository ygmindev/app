import { type EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type ENVIRONMENT, type RUNTIME } from '@lib/shared/environment/environment.constants';

export type EnvironmentModel = `${ENVIRONMENT}`;

export type RuntimeModel = `${RUNTIME}`;

export type EnvironmentOverrideParamsModel = {
  environment?: EnvironmentModel;

  runtime?: RuntimeModel;

  variables?(): PartialModel<EnvironmentConfigModel>;
};
