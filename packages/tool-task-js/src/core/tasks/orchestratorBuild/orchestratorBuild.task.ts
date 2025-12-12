import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { taskConfig } from '@lib/config/task/task';
import {
  type OrchestratorBuildModel,
  type OrchestratorBuildParamsModel,
} from '@tool/task/core/tasks/orchestratorBuild/orchestratorBuild.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { exportModules } from '@tool/task/core/utils/exportModules/exportModules';

export const orchestratorBuild = buildTask({
  task: async (params: OrchestratorBuildParamsModel): Promise<OrchestratorBuildModel> => {
    const { outDir, taskExtension, workflowExtension } = taskConfig.params();

    await exportModules({
      globs: [fromPackages(`*/src/**/*${workflowExtension}`)],
      outPathname: joinPaths([outDir, 'workflows.js']),
    });

    await exportModules({
      globs: [fromPackages(`*/src/**/*${taskExtension}`)],
      outPathname: joinPaths([outDir, 'tasks.js']),
    });
  },
});
