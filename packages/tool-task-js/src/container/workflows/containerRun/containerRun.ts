import { CONTAINER_RUN } from '@tool/task/container/workflows/containerRun/containerRun.constants';
import { type ContainerRunParamsModel } from '@tool/task/container/workflows/containerRun/containerRun.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const containerRun: BuildWorkflowParamsModel<
  ContainerRunParamsModel,
  void,
  [ContainerRunParamsModel]
> = {
  name: CONTAINER_RUN,

  steps: (params, context) => [{ name: CONTAINER_RUN }],
};
