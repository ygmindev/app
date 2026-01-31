import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { NODE_BUILD } from '@tool/task/node/tasks/nodeBuild/nodeBuild.constants';
import { type NodeBuildParamsModel } from '@tool/task/node/tasks/nodeBuild/nodeBuild.models';
import { SERVER_BUILD } from '@tool/task/node/workflows/serverBuild/serverBuild.constants';
import { type ServerBuildParamsModel } from '@tool/task/node/workflows/serverBuild/serverBuild.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const serverBuild: BuildWorkflowParamsModel<
  ServerBuildParamsModel,
  void,
  [NodeBuildParamsModel]
> = {
  context: {
    environment: ENVIRONMENT.PRODUCTION,
  },

  name: SERVER_BUILD,

  steps: ({ entryFiles = 'src/index.ts', format, outDirname = fromDist(), watch }, context) => [
    {
      context,
      name: NODE_BUILD,
      params: {
        entryFiles,
        format,
        outDirname,
        watch,
      },
    },
  ],
};
