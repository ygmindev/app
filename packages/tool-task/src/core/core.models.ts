import { type EnvironmentOverrideParamsModel } from '#lib-shared/environment/environment.models';
import { type TASK_STATUS } from '#tool-task/core/core.constants';

export type TaskFunctionModel = () => Promise<TaskResultModel>;

export type TaskStatusModel = `${TASK_STATUS}`;

export type TaskResultModel = {
  error?: Error;
  message?: string;
  status: TaskStatusModel;
};

export type TaskParamsModel<TType = undefined> = {
  name: string;
  onAfter?: Array<string | TaskFunctionModel>;
  onBefore?: Array<string | TaskFunctionModel>;
  options?: TType;
  root?: string;
  target?: string;
  task(params: TaskContextModel<TType>): Promise<TaskResultModel>;
} & EnvironmentOverrideParamsModel;

export type TaskContextModel<TType = undefined> = {
  name?: string;
} & Pick<TaskParamsModel<TType>, 'options' | 'root' | 'target'>;
