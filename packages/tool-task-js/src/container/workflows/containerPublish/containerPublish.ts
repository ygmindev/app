import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { CONTAINER_PUBLISH } from '@tool/task/container/workflows/containerPublish/containerPublish.constants';
import { type ContainerPublishParamsModel } from '@tool/task/container/workflows/containerPublish/containerPublish.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const containerPublish: BuildWorkflowParamsModel<
  ContainerPublishParamsModel,
  void,
  [ContainerPublishParamsModel]
> = {
  context: {
    environment: ENVIRONMENT.PRODUCTION,
  },

  name: CONTAINER_PUBLISH,

  steps: ({ isBuild = true }, context) => [{ name: CONTAINER_PUBLISH, params: { isBuild } }],
};
