import { type WorkerParamsModel } from '@tool/task/core/utils/Worker/Worker.models';

export type WorkerRunParamsModel = Partial<WorkerParamsModel> & {
  count?: number;
};

export type WorkerRunModel = void;
