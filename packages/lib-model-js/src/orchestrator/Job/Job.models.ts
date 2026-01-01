import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type JobModel<TParams extends unknown = unknown> = EntityResourceModel & {
  context?: ExecutionContextModel;

  params?: TParams;

  workflowName: string;
};
