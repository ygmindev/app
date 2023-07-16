import { setEnvironment } from '#lib-shared/environment/utils/setEnvironment/setEnvironment';
import { _command } from '#tool-task/core/utils/command/_command';
import {
  type CommandModel,
  type CommandParamsModel,
} from '#tool-task/core/utils/command/command.models';

export const command = async (
  ...[command, options = {}]: CommandParamsModel
): Promise<CommandModel> => {
  const { environment, overrides, ...optionsF } = options;
  setEnvironment({ environment, overrides });
  return _command(command, optionsF);
};
