import { WORKFLOW_STEP_TYPE } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.constants';
import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type ContainerBuildParamsModel } from '@tool/task/container/tasks/containerBuild/containerBuild.models';
import { CONTAINER_PUBLISH } from '@tool/task/container/tasks/containerPublish/containerPublish.constants';
import { type ContainerPublishParamsModel } from '@tool/task/container/tasks/containerPublish/containerPublish.models';
import { appPrompt } from '@tool/task/core/utils/appPrompt/appPrompt';
import { SERVER_BUILD } from '@tool/task/node/workflows/serverBuild/serverBuild.constants';
import { type ServerBuildParamsModel } from '@tool/task/node/workflows/serverBuild/serverBuild.models';
import { SERVER_PUBLISH } from '@tool/task/node/workflows/serverPublish/serverPublish.constants';
import {
  type ServerPublishModel,
  type ServerPublishParamsModel,
} from '@tool/task/node/workflows/serverPublish/serverPublish.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const serverPublish: BuildWorkflowParamsModel<
  ServerPublishParamsModel,
  ServerPublishModel,
  [ServerBuildParamsModel, ContainerBuildParamsModel, ContainerPublishParamsModel]
> = {
  name: SERVER_PUBLISH,

  prompts: [appPrompt()],

  steps: (params, context) => [
    {
      context: { ...context, app: params.app },
      name: SERVER_BUILD,
      type: WORKFLOW_STEP_TYPE.WORKFLOW,
    },
    {
      context: { ...context, app: params.app },
      name: CONTAINER_PUBLISH,
      params: { isBuild: true, platform: PLATFORM.NODE },
    },
  ],
};
