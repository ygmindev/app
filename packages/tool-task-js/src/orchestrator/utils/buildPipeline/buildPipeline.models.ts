import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { type PipelineModel } from '@lib/model/orchestrator/Pipeline/Pipeline.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export type BuildPipelineParamsModel<
  TParams extends Array<Array<Record<string, unknown> | void>>,
  TWorkflows extends Array<
    Array<BuildWorkflowParamsModel<TParams[number][number], unknown, Array<unknown>>>
  >,
> = {
  app?: string;
  pipelines: Array<{
    app?: string;
    name: string;
    workflows: Array<
      | TWorkflows[number][number]
      | [TWorkflows[number][number], TParams[number][number], ExecutionContextModel]
    >;
  }>;
};

export type BuildPipelineModel = Array<PipelineModel>;
