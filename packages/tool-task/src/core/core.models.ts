import { type NilModel, type PartialModel } from '#lib-shared/core/core.models';
import { type EnvironmentOverrideParamsModel } from '#lib-shared/environment/environment.models';
import { type TASK_STATUS } from '#tool-task/core/core.constants';
import { type ParallelOptionsModel } from '#tool-task/core/utils/parallel/parallel.models';
import { type PromptParamsModel } from '#tool-task/core/utils/prompt/prompt.models';

export type TaskStatusModel = `${TASK_STATUS}`;

export type TaskModel<TType> =
  | ((context: TaskContextModel<TType>) => Promise<void> | void | NilModel)
  | TaskCommandModel<TType>
  | [tasks: Array<TaskCommandModel<TType>>, options?: ParallelOptionsModel];

export type TaskCommandModel<TType> =
  | ((context: TaskContextModel<TType>) => string | NilModel)
  | string
  | NilModel;

export type TaskResultModel = {
  error?: Error;
  message?: string;
  status: TaskStatusModel;
};

export type TaskParamsModel<TType> = Omit<TaskContextModel<TType>, 'options'> & {
  onBefore?: Array<TaskModel<TType>>;
  onFinish?: Array<TaskModel<TType>>;
  options?:
    | PromptParamsModel<TType>
    | ((
        context: Pick<TaskContextModel<TType>, 'name' | 'root' | 'overrides'>,
      ) => PromptParamsModel<TType>);
  target?: string;
  task: Array<TaskModel<TType>>;
} & EnvironmentOverrideParamsModel;

export type TaskContextModel<TType> = {
  name: string;
  options?: TType;
  overrides?: PartialModel<TType>;
  root?: string;
};
