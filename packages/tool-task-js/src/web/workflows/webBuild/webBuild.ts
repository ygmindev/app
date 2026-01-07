import { PLATFORM } from '@lib/shared/platform/platform.constants';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';
import { WEB_BUILD } from '@tool/task/web/workflows/webBuild/webBuild.constants';
import { type WebBuildParamsModel } from '@tool/task/web/workflows/webBuild/webBuild.models';

export const webBuild: BuildWorkflowParamsModel<WebBuildParamsModel, void, [WebBuildParamsModel]> =
  {
    context: {
      overrrides: {
        ENV_PLATFORM: PLATFORM.WEB,
      },
    },

    name: WEB_BUILD,

    steps: (params, context) => [{ name: WEB_BUILD }],
  };
