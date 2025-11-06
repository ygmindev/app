import { type TaskParamsModel } from '@tool/task/core/core.models';

export type PythonTasksParamsModel = {
  additionalTasks?: Array<TaskParamsModel<unknown>>;
};

export type PythonTasksMdoel = Array<TaskParamsModel<unknown>>;
