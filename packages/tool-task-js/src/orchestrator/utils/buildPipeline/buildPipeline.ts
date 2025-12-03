import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import {
  type BuildPipelineModel,
  type BuildPipelineParamsModel,
} from '@tool/task/orchestrator/utils/buildPipeline/buildPipeline.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';
import isArray from 'lodash/isArray';

export const buildPipeline = <
  TParams extends Array<Array<Record<string, unknown> | void>>,
  TWorkflows extends Array<
    Array<BuildWorkflowParamsModel<TParams[number][number], unknown, Array<unknown>>>
  >,
>({
  app: appPipeline,
  pipelines,
}: BuildPipelineParamsModel<TParams, TWorkflows>): BuildPipelineModel =>
  pipelines.map(({ app: appWorkflow, name, workflows }) => {
    const appF = appWorkflow ?? appPipeline;
    return {
      _id: name,
      app: appF,
      name,
      workflows: workflows.map((w) => {
        const [workflow, workflowParams, workflowContext] = isArray(w)
          ? [w[0], w[1], w[2]]
          : [w, {}, {}];
        const workflowContextF: ExecutionContextModel = { ...workflowContext, app: appF };
        return {
          _id: workflow.name,
          contex: cleanObject(workflowContextF),
          name: workflow.name,
          params: cleanObject(workflowParams),
          steps: workflow.steps(workflowParams, workflowContextF).map((s) => ({
            context: cleanObject({ ...workflowContextF, ...s.context }),
            name: s.name,
            params: cleanObject({ ...workflowContextF, ...(s.params ?? {}) }),
            type: s.type,
          })),
        };
      }),
    };
  });
