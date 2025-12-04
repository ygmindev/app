import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type WriteFileParamsModel } from '@tool/task/core/tasks/writeFile/writeFile.models';
import { BUILD_LINT } from '@tool/task/node/tasks/buildLint/buildLint.constants';
import { BUILD_TYPESCRIPT } from '@tool/task/node/tasks/buildTypescript/buildTypescript.constants';
import { type NodeBuildParamsModel } from '@tool/task/node/tasks/nodeBuild/nodeBuild.models';
import { BUILD_CONFIG } from '@tool/task/node/workflows/buildConfig/buildConfig.constants';
import { type BuildConfigParamsModel } from '@tool/task/node/workflows/buildConfig/buildConfig.models';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';

export const buildConfig: BuildWorkflowParamsModel<
  BuildConfigParamsModel,
  void,
  [NodeBuildParamsModel, WriteFileParamsModel]
> = {
  context: {
    environment: ENVIRONMENT.PRODUCTION,
  },

  name: BUILD_CONFIG,

  steps: () => [{ name: BUILD_LINT }, { name: BUILD_TYPESCRIPT }],
};
