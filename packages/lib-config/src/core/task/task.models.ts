import { TaskCliParamsModel } from "@tool/task/core/core.models";

export interface TaskConfigParamsModel extends TaskCliParamsModel {
  taskExtension: string;
}

export type TaskConfigModel = void;
