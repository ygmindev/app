import type { TaskResultModel } from '@tool/task/core/core.models';

export interface _CliParamsModel {
  task?: string;
}

export type _CliModel = Promise<TaskResultModel>;
