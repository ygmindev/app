import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';
import type { TASK_STATUS } from '@tool/task/core/core.constants';

export type TaskStatusModel = `${TASK_STATUS}`;

export interface TaskResultModel {
  message?: string;
  status: TaskStatusModel;
}

export interface TaskParamsModel<TOptions = undefined> extends EnvironmentOverrideParamsModel {
  name: string;
  onAfter?: Array<string | CallablePromiseModel<TaskStatusModel>>;
  onBefore?: Array<string | CallablePromiseModel<TaskStatusModel>>;
  options?: TOptions;
  target?: string;
  task(context: {
    name: string;
    options: TOptions;
    root: string;
    target?: string;
  }): Promise<TaskResultModel>;
}
