import { App } from '@lib/backend/app/utils/App/App';
import {
  type WorkerAppModel,
  type WorkerAppParamsModel,
} from '@lib/backend/app/utils/WorkerApp/WorkerApp.models';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { type DatabaseConfigModel } from '@lib/config/database/database.models';
import { taskConfig } from '@lib/config/task/task';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { parseArgs } from '@tool/task/core/utils/parseArgs/parseArgs';
import { Worker } from '@tool/task/orchestrator/utils/Worker/Worker';

export class WorkerApp extends App implements WorkerAppModel {
  count: number;
  databaseConfig: () => DatabaseConfigModel;
  workers?: Array<Worker>;

  constructor({ count, database, name }: WorkerAppParamsModel) {
    super({ name });
    this.count = count ?? parseArgs<{ count?: number }>().count ?? 1;
    this.databaseConfig = database;
  }

  async cleanUp(): Promise<void> {
    await Promise.all(this.workers?.map(async (v) => v.cleanUp()) ?? []);
  }

  async initialize(): Promise<void> {
    await initialize({ database: () => this.databaseConfig() });

    const { queue, tasksPathname, workerCountDefault, workflowsPathname } = taskConfig.params();
    this.workers = new Array(this.count ?? workerCountDefault).fill(
      new Worker({
        queue,
        tasks: await import(/* @vite-ignore */ tasksPathname),
        workflowsPathname,
      }),
    );
    await Promise.all(this.workers.map(async (v) => v.initialize()));
  }

  async run(): Promise<void> {
    await this.initialize();
    try {
      await Promise.all(this.workers?.map(async (v) => v.run()) ?? []);
    } catch (e) {
      logger.fail(e as Error);
    } finally {
      await this.cleanUp();
    }
  }
}
