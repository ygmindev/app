import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { type WorkflowModel } from '@lib/model/orchestrator/Workflow/Workflow.models';
import {
  type ClientRunModel,
  type ClientRunParamsModel,
} from '@tool/task/core/tasks/clientRun/clientRun.models';
import { task } from '@tool/task/core/utils/task/task';
import { type WorkflowParamsModel } from '@tool/task/core/utils/workflow/workflow.models';

export const clientRun = task({
  task: async ({ id, workflow }: ClientRunParamsModel, context): Promise<ClientRunModel> => {
    const pathnames = fromGlobs([fromPackages(`*/src/**/*.workflow.ts`)], {
      isAbsolute: true,
    });
    const params = await Promise.all(
      pathnames.map(async (v) => {
        const { main } = fileInfo(v);
        const workflow = (await import(v)) as { params: WorkflowParamsModel };
        return {
          _id: main,
          name: main,
          params: workflow.params,
          steps: [],
        } as WorkflowModel;
      }),
    );
    console.warn(params);
  },
});

// import { logger } from '@lib/shared/logging/utils/Logger/Logger';
// import {
//   type ClientRunModel,
//   type ClientRunParamsModel,
// } from '@tool/task/core/tasks/clientRun/clientRun.models';
// import { Client } from '@tool/task/core/utils/Client/Client';
// import { task } from '@tool/task/core/utils/task/task';

// export const clientRun = task({
//   task: async ({ id, workflow }: ClientRunParamsModel, context): Promise<ClientRunModel> => {
//     const client = new Client({ id });
//     try {
//       await client.initialize();
//       await client.run(workflow, {}, context);
//     } catch (e) {
//       logger.fail(e);
//     }
//   },
// });
