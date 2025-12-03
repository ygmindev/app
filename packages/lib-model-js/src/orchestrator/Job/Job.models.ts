import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { type ResourceModel } from '@lib/model/resource/Resource/Resource.models';

export type JobModel<TParams extends unknown = unknown> = ResourceModel & {
  context?: ExecutionContextModel;

  params?: TParams;

  workflow: string;
};
