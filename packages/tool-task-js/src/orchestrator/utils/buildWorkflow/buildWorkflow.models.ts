import {
  type _BuildWorkflowModel,
  type _BuildWorkflowParamsModel,
} from '@tool/task/orchestrator/utils/buildWorkflow/_buildWorkflow.models';

export type BuildWorkflowParamsModel<
  TParams extends Record<string, unknown> | void = void,
  TResult = void,
  TSteps extends Array<unknown> = Array<unknown>,
> = _BuildWorkflowParamsModel<TParams, TResult, TSteps>;

export type BuildWorkflowModel<
  TParams extends Record<string, unknown> | void = void,
  TResult = void,
> = _BuildWorkflowModel<TParams, TResult>;
