import type { TaskResultModel } from '#tool-task/core/core.models';

export type StaticServerParamsModel = {
  isOpen?: boolean;
  port?: number;
  root: string;
};

export type StaticServerModel = Promise<TaskResultModel>;