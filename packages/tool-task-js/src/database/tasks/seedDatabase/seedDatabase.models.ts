import { type ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';

export type SeedDatabaseModel = EnvironmentOverrideParamsModel & {
  environment?: ENVIRONMENT;
};
