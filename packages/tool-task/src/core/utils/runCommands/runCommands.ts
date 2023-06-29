import every from 'lodash/every';

import { setEnvironment } from '#lib-shared/environment/utils/setEnvironment/setEnvironment';
import { info } from '#lib-shared/logging/utils/logger/logger';
import { command as commandF } from '#tool-task/core/utils/command/command';
import { type RunCommandsParamsModel } from '#tool-task/core/utils/runCommands/runCommands.models';

export const runCommands = async ({ commands }: RunCommandsParamsModel): Promise<boolean> => {
  const results = await Promise.all(
    commands.map(({ command, completeMessage, environment, overrides, root }) => {
      setEnvironment({ environment, overrides });
      info('starting', command);
      return new Promise<boolean>((resolve, reject) => {
        const handleSuccess = (): void => {
          info('success', command);
          resolve(true);
        };
        const handleError = (): void => {
          info('error', command);
          reject(false);
        };
        commandF(command, {
          isSilent: true,
          onData: (message) =>
            completeMessage && message.includes(completeMessage) && handleSuccess(),
          root,
        })
          .then((result) => (result ? handleSuccess() : handleError()))
          .catch(handleError);
      });
    }),
  );
  return every(results);
};
