import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as taskConfig } from '@lib/config/task/task';
import {
  type TasksBuildModel,
  type TasksBuildParamsModel,
} from '@tool/task/core/tasks/tasksBuild/tasksBuild.models';
import { exportAll } from '@tool/task/core/utils/exportAll/exportAll';
import { task } from '@tool/task/core/utils/task/task';

export const tasksBuild = task({
  task: async (params: TasksBuildParamsModel): Promise<TasksBuildModel> => {
    const { outDir, taskExtension, workflowExtension } = taskConfig.params();

    await exportAll({
      globs: [fromPackages(`*/src/**/*${workflowExtension}`)],
      outPathname: joinPaths([outDir, 'workflows.js']),
    });

    await exportAll({
      globs: [fromPackages(`*/src/**/*${taskExtension}`)],
      outPathname: joinPaths([outDir, 'tasks.js']),
    });
  },
});
