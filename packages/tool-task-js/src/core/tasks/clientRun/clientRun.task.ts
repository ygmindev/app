import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type ClientRunModel,
  type ClientRunParamsModel,
} from '@tool/task/core/tasks/clientRun/clientRun.models';
import { task } from '@tool/task/core/utils/task/task';
import { Client } from '@tool/task/orchestrator/utils/Client/Client';

export const clientRun = task({
  task: async ({ id, workflow }: ClientRunParamsModel, context): Promise<ClientRunModel> => {
    const client = new Client({ id });
    try {
      await client.initialize();
      await client.run(workflow, {}, context);
    } catch (e) {
      logger.fail(e);
    }
  },
});
