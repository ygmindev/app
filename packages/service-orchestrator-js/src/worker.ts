import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { taskConfig } from '@lib/config/task/task';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { parseArgs } from '@tool/task/core/utils/parseArgs/parseArgs';
import { Worker } from '@tool/task/orchestrator/utils/Worker/Worker';

import { databaseConfig } from './config/database';

await initialize({ database: () => databaseConfig.params() });

const { count = 1 } = parseArgs<{ count?: number }>();
const { queue, tasksPathname, workerCountDefault, workflowsPathname } = taskConfig.params();

const workers: Array<Worker> = new Array(count ?? workerCountDefault).fill(
  new Worker({
    queue,
    tasks: await import(/* @vite-ignore */ tasksPathname),
    workflowsPathname,
  }),
);

const cleanUp = async (): Promise<void> => {
  await Promise.all(workers.map(async (v) => v.cleanUp()));
};

try {
  await Promise.all(
    workers.map(async (v) => {
      await v.initialize();
      return v.run();
    }),
  );
} catch (e) {
  await cleanUp();
  logger.fail(e as Error);
}

export { cleanUp };
