import { _Worker } from '@tool/task/core/utils/Worker/_Worker';
import {
  type WorkerModel,
  type WorkerParamsModel,
} from '@tool/task/core/utils/Worker/Worker.models';

export class Worker extends _Worker implements WorkerModel {
  constructor(params: WorkerParamsModel) {
    super(params);
  }
}
