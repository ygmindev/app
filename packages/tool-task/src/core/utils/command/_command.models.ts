import { type TaskResultModel } from '#tool-task/core/core.models';
import { type CommandOptionsModel } from '#tool-task/core/utils/command/command.models';

export type _CommandParamsModel = [command: string, options?: CommandOptionsModel];

export type _CommandModel = TaskResultModel;
