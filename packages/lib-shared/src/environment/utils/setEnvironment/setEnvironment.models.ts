import type { EnvironmentOverrideParamsModel } from '#lib-shared/environment/environment.models';

export interface SetEnvironmentParamsModel extends EnvironmentOverrideParamsModel {
  writes?: Array<RegExp>;
}
