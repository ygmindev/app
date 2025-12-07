import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type WorkerRunModel,
  type WorkerRunParamsModel,
} from '@tool/task/core/tasks/workerRun/workerRun.models';
import { Cli } from '@tool/task/core/utils/Cli/Cli';
import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { type TaskModel } from '@tool/task/core/utils/buildTask/buildTask.models';
import { Worker } from '@tool/task/orchestrator/utils/Worker/Worker';
import reduce from 'lodash/reduce';

export const workerRun = buildTask<WorkerRunParamsModel, WorkerRunModel>({
  task: async ({ count = 1, queue, tasks, workflowsDir, workflowsName = 'workflows' }) => {
    let tasksF = tasks;
    if (!tasksF) {
      const cli = new Cli();
      await cli.initialize();
      tasksF = reduce(
        cli.registry,
        (result, v, k) => ({ ...result, [k]: v.task }),
        {} as Record<string, TaskModel>,
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
  },
});
