import { _command } from '#tool-task/core/utils/command/_command';
import {
  type CommandModel,
  type CommandParamsModel,
} from '#tool-task/core/utils/command/command.models';

export const command = async (...params: CommandParamsModel): CommandModel => _command(...params);
