import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { databaseConfig } from '@lib/config/database/database.orchestrator';
import { _Worker } from '@tool/task/orchestrator/utils/Worker/_Worker';
import {
  type WorkerModel,
  type WorkerParamsModel,
} from '@tool/task/orchestrator/utils/Worker/Worker.models';

export class Worker extends _Worker implements WorkerModel {
  constructor(params: WorkerParamsModel) {
    super(params);
  }

  async onInitialize(): Promise<void> {
    await initialize({ database: () => databaseConfig.params() });
    await super.onInitialize();
  }
}
