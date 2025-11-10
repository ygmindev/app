import { type AsyncCallableModel } from '@lib/shared/core/core.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type WorkerRunModel,
  type WorkerRunParamsModel,
} from '@tool/task/core/tasks/workerRun/workerRun.models';
import { Cli } from '@tool/task/core/utils/Cli/Cli';
import { Worker } from '@tool/task/core/utils/Worker/Worker';
import reduce from 'lodash/reduce';

export const workerRun = async ({
  count = 1,
  queue,
  tasks,
  workflowsDir,
  workflowsName = 'workflows',
}: WorkerRunParamsModel): Promise<WorkerRunModel> => {
  let tasksF = tasks;
  if (!tasksF) {
    const cli = new Cli();
    await cli.initialize();
    tasksF = reduce(
      cli.registry,
      (result, v, k) => ({ ...result, [k]: v.task }),
      {} as Record<string, AsyncCallableModel>,
    );
  }

  const workers: Array<Worker> = new Array(count).fill(
    new Worker({ queue, tasks: tasksF, workflowsDir, workflowsName }),
  );

  try {
    await Promise.all(
      workers.map(async (v) => {
        await v.initialize();
        return v.run();
      }),
    );
  } catch (e) {
    logger.fail(e);
  }
};
