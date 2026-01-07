import { NODE_BUILD } from '@tool/task/node/tasks/nodeBuild/nodeBuild.constants';
import { type NodeBuildParamsModel } from '@tool/task/node/tasks/nodeBuild/nodeBuild.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';
import { WEB_BUILD } from '@tool/task/web/workflows/webBuild/webBuild.constants';
import { type WebBuildParamsModel } from '@tool/task/web/workflows/webBuild/webBuild.models';

export const webBuild: BuildWorkflowParamsModel<WebBuildParamsModel, void, [NodeBuildParamsModel]> =
  {
    name: WEB_BUILD,

    steps: ({ entryFiles, format, outDir, watch }, context) => [
      {
        context,
        name: NODE_BUILD,
        params: {
          entryFiles,
          format,
          outDir,
          watch,
        },
      },
    ],
  };
