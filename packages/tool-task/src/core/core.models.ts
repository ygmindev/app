import { type NilModel } from '#lib-shared/core/core.models';
import { type EnvironmentOverrideParamsModel } from '#lib-shared/environment/environment.models';
import { type TASK_STATUS } from '#tool-task/core/core.constants';
import { type PromptParamsModel } from '#tool-task/core/utils/prompt/prompt.models';

export type TaskStatusModel = `${TASK_STATUS}`;

export type TaskModel<TType = undefined> =
  | ((params: TaskContextModel<TType>) => string | Promise<void> | NilModel)
  | string
  | NilModel;

export type TaskResultModel = {
  error?: Error;
  message?: string;
  status: TaskStatusModel;
};

export type TaskParamsModel<TType = undefined> = {
  name: string;
  onFinish?: TaskModel<TType> | Array<TaskModel<TType>>;
  params?: PromptParamsModel<TType>;
  root?: string;
  target?: string;
  task: TaskModel<TType> | Array<TaskModel<TType>>;
} & EnvironmentOverrideParamsModel;

export type TaskContextModel<TType = undefined> = Pick<TaskParamsModel<TType>, 'root'> & {
  params?: TType;
};
