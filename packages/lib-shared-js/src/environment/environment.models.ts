import { type EnvironmentConfigModel } from '@lib/config/environment/environment.models';
import { type PartialModel } from '@lib/shared/core/core.models';
import { type ENVIRONMENT } from '@lib/shared/environment/environment.constants';

export type EnvironmentModel = `${ENVIRONMENT}`;

export type EnvironmentOverrideParamsModel = {
  environment?: EnvironmentModel;

  variables?(): PartialModel<EnvironmentConfigModel>;
};
