import { type EnvironmentParamsModel } from '@lib/backend/environment/utils/Environment/Environment.models';

export type ExceutionContextModel = EnvironmentParamsModel & {
  queue?: string;
};
