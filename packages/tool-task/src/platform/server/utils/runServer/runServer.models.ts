import { type TaskResultModel } from '#tool-task/core/core.models';

export type RunServerParamsModel = {
  isOpen?: boolean;
  path: string;
  port?: number | string;
  root?: string;
};

export type RunServerModel = TaskResultModel;
