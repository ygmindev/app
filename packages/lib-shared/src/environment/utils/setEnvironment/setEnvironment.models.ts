import type { EnvironmentOverrideParamsModel } from '#lib-shared/environment/environment.models';

export type SetEnvironmentParamsModel = {
  writes?: Array<RegExp>;
} & EnvironmentOverrideParamsModel;
