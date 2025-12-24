import { type EnvironmentParamsModel } from '@lib/backend/environment/utils/Environment/Environment.models';

export type ExecutionContextModel = EnvironmentParamsModel & {
  queue?: string;
  workflowId?: string;
};
