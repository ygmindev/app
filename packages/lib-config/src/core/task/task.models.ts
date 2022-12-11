import type { _TaskParamsModel } from '@lib/config/core/task/_task.models';
import type { TASK_STATUS } from '@lib/config/core/task/task.constants';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';

export type TaskStatusModel = `${TASK_STATUS}`;

export interface TaskParamsModel<TOptions = undefined>
  extends Omit<_TaskParamsModel, 'task'>,
    EnvironmentOverrideParamsModel {
  onAfter?: Array<string | CallablePromiseModel<TaskStatusModel>>;
  onBefore?: Array<string | CallablePromiseModel<TaskStatusModel>>;
  options?: TOptions;
  target?: string;
  task(context: TaskContextModel<TOptions>): Promise<TaskResultModel>;
}

export interface TaskConfigParamsModel {
  configFile: string;
  taskExtension: string;
}

export interface TaskResultModel {
  message?: string;
  status: TaskStatusModel;
}

export interface TaskContextModel<TOptions = undefined> {
  name: string;
  options: TOptions;
  root: string;
  target?: string;
}
