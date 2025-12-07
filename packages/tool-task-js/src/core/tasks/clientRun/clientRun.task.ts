import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type ClientRunModel,
  type ClientRunParamsModel,
} from '@tool/task/core/tasks/clientRun/clientRun.models';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { Client } from '@tool/task/orchestrator/utils/Client/Client';

export const clientRun = buildTask({
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
