import type { ENVIRONMENT } from '@lib/shared/environment/environment.constants';

export type EnvironmentModel = `${ENVIRONMENT}`;

export interface EnvironmentOverrideParamsModel {
  environment?: EnvironmentModel;
  overrides?: Record<string, string>;
}
