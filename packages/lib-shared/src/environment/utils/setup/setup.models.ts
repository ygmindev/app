import type { EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';

export interface SetupParamsModel extends EnvironmentOverrideParamsModel {
  writes?: Array<RegExp>;
}
