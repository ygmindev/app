import type { TaskResultModel } from "@tool/task/core/core.models";

export interface RunCleanParamsModel {
  patterns?: Array<string>;
  root?: string;
}

export type RunCleanModel = Promise<TaskResultModel>;
