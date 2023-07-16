import { type TaskParamsModel } from '#tool-task/core/core.models';
import { type _TaskRunnerModel } from '#tool-task/core/utils/TaskRunner/_TaskRunner.models';

export type TaskRunnerModel = {
  aliases: Record<string, string>;

  register<TType = undefined>(params: TaskParamsModel<TType>): void;
} & _TaskRunnerModel;
