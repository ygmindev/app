import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import {
  type BuildPipelinesModel,
  type BuildPipelinesParamsModel,
} from '@tool/task/orchestrator/utils/buildPipelines/buildPipelines.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';
import isArray from 'lodash/isArray';

export const buildPipelines = <
  TParams extends Array<Array<Record<string, unknown> | void>>,
  TWorkflows extends Array<
    Array<BuildWorkflowParamsModel<TParams[number][number], unknown, Array<unknown>>>
  >,
>({
  app: appPipeline,
  pipelines,
}: BuildPipelinesParamsModel<TParams, TWorkflows>): BuildPipelinesModel =>
  pipelines.map(({ app: appWorkflow, name, workflows }) => {
    const appF = appWorkflow ?? appPipeline;
    return {
      _id: name,
      app: appF,
      name,
      workflows: workflows.map((w) => {
        const [workflow, workflowParams, workflowContext] = isArray(w)
          ? [w[0], w[1] ?? {}, w[2] ?? {}]
          : [w, w.context ?? {}, w.params ?? {}];

        const workflowContextF: ExecutionContextModel = cleanObject({
          ...(workflow.context ?? {}),
          ...workflowContext,
          app: appF,
        });

        const workflowParamsF = cleanObject({ ...(workflow.params ?? {}), ...workflowParams });

        return {
          _id: workflow.name,
          context: workflowContextF,
          name: workflow.name,
          params: workflowParamsF,
          steps: workflow.steps(workflowParamsF, workflowContextF).map((s) => ({
            context: cleanObject({ ...workflowContextF, ...(s.context ?? {}) }),
            name: s.name,
            params: cleanObject({ ...workflowParamsF, ...(s.params ?? {}) }),
            type: s.type,
          })),
        };
      }),
    };
  });
