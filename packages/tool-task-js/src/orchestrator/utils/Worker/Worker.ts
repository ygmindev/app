import { _Worker } from '@tool/task/orchestrator/utils/Worker/_Worker';
import {
  type WorkerModel,
  type WorkerParamsModel,
} from '@tool/task/orchestrator/utils/Worker/Worker.models';

export class Worker extends _Worker implements WorkerModel {
  constructor(params: WorkerParamsModel) {
    super(params);
  }
}
