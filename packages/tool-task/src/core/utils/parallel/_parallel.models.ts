import { type TaskResultModel } from '#tool-task/core/core.models';
import { type CommandParamsModel } from '#tool-task/core/utils/command/command.models';

export type _ParallelParamsModel = Array<CommandParamsModel | string>;

export type _ParallelModel = TaskResultModel;
