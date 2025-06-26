import { type EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';

export type SetEnvironmentParamsModel = EnvironmentOverrideParamsModel & {
  writes?: Array<RegExp>;
};

export type SetEnvironmentModel = Record<string, string>;
