import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type ClientRunModel,
  type ClientRunParamsModel,
} from '@tool/task/core/tasks/clientRun/clientRun.models';
import { Client } from '@tool/task/core/utils/Client/Client';
import { task } from '@tool/task/core/utils/task/task';

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
