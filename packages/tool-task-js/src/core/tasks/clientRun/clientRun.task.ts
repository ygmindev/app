import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type ClientRunModel,
  type ClientRunParamsModel,
} from '@tool/task/core/tasks/clientRun/clientRun.models';
import { Client } from '@tool/task/core/utils/Client/Client';

export const clientRun = async ({
  id,
  params,
  queue,
  workflow,
}: ClientRunParamsModel): Promise<ClientRunModel> => {
  const client = new Client({ id });
  const app = 'server-orchestrator-js';
  try {
    await client.initialize();
    await client.run(workflow, { params: { app }, queue });
  } catch (e) {
    logger.fail(e);
  }
};
