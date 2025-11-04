import { type TaskConfigModel } from '@lib/config/task/task.models';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type _TaskRunnerModel } from '@tool/task/core/utils/TaskRunner/_TaskRunner.models';

export type TaskRunnerModel = Omit<_TaskRunnerModel, 'registry'> & {
  aliases: Record<string, string>;

  tasks: Array<TaskParamsModel<unknown>>;

  initialize(): Promise<void>;

  register<TType = undefined>(params: TaskParamsModel<TType>): void;

  runTask<TType = undefined>(params: TaskParamsModel<TType>): Promise<void>;
};

export type TaskInitializeParamsModel = Pick<
  TaskConfigModel,
  'configFilename' | 'packageDirs' | 'taskExtension'
>;
