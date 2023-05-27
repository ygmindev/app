import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';
import type { TASK_STATUS } from '@tool/task/core/core.constants';

export type TaskStatusModel = `${TASK_STATUS}`;

export interface TaskResultModel {
  error?: Error;
  message?: string;
  status: TaskStatusModel;
}

export interface TaskParamsModel<TType = undefined> extends EnvironmentOverrideParamsModel {
  name: string;
  onAfter?: Array<string | CallablePromiseModel<TaskResultModel>>;
  onBefore?: Array<string | CallablePromiseModel<TaskResultModel>>;
  options?: TType;
  root?: string;
  target?: string;
  task(params: TaskContextModel<TType>): Promise<TaskResultModel>;
}

export interface TaskContextModel<TType = undefined>
  extends Pick<TaskParamsModel<TType>, 'name' | 'options' | 'root' | 'target'> {}
