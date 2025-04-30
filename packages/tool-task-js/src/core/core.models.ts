import { type NilModel, type PartialModel } from '@lib/shared/core/core.models';
import { type EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';
import { type TASK_STATUS } from '@tool/task/core/core.constants';
import { type PromptParamsModel } from '@tool/task/core/utils/prompt/prompt.models';
import { type ParallelOptionsModel } from '@tool/task/core/utils/runParallel/runParallel.models';

export type TaskStatusModel = `${TASK_STATUS}`;

export type TaskModel<TType extends unknown> =
  | ((context: TaskContextModel<TType>) => Promise<void> | void | NilModel)
  | TaskCommandModel<TType>
  | [
      tasks: Array<TaskCommandModel<TType>>,
      options?: ParallelOptionsModel,
      environment?: EnvironmentOverrideParamsModel,
    ];

export type TaskCommandModel<TType extends unknown> =
  | ((context: TaskContextModel<TType>) => string | NilModel)
  | string
  | NilModel;

export type TaskResultModel = {
  error?: Error;
  message?: string;
  status: TaskStatusModel;
};

export type TaskParamsModel<TType extends unknown> = Omit<
  TaskContextModel<TType>,
  'options' | 'overrides'
> &
  EnvironmentOverrideParamsModel & {
    onBefore?: Array<TaskModel<TType>>;
    onFinish?: Array<TaskModel<TType>>;
    options?: (
      context: Pick<TaskContextModel<TType>, 'name' | 'root' | 'overrides'>,
    ) => Promise<PromptParamsModel<TType>>;
    overrides?(): PartialModel<TType>;
    task: Array<TaskModel<TType>>;
  };

export type TaskContextModel<TType extends unknown> = {
  name: string;
  options?: TType;
  overrides?: PartialModel<TType>;
  root?: string;
  target?: string;
};
