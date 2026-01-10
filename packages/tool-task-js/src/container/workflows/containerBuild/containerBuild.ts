import { CONTAINER_BUILD } from '@tool/task/container/workflows/containerBuild/containerBuild.constants';
import { type ContainerBuildParamsModel } from '@tool/task/container/workflows/containerBuild/containerBuild.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const containerBuild: BuildWorkflowParamsModel<
  ContainerBuildParamsModel,
  void,
  [ContainerBuildParamsModel]
> = {
  name: CONTAINER_BUILD,

  steps: (params, context) => [{ name: CONTAINER_BUILD }],
};
