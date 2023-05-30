import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import { info } from '@lib/shared/logging/utils/logger/logger';
import { command as _command } from '@tool/task/core/utils/command/command';
import type { RunCommandsParamsModel } from '@tool/task/core/utils/runCommands/runCommands.models';
import every from 'lodash/every';

export const runCommands = async ({ commands }: RunCommandsParamsModel): Promise<boolean> => {
  const _results = await Promise.all(
    commands.map(({ command, completeMessage, environment, overrides, root }) => {
      setEnvironment({ environment, overrides });
      info('starting', command);
      return new Promise<boolean>((resolve, reject) => {
        const _handleSuccess = (): void => {
          info('success', command);
          resolve(true);
        };
        const _handleError = (): void => {
          info('error', command);
          reject(false);
        };
        _command(command, {
          isSilent: true,
          onData: (message) =>
            completeMessage && message.includes(completeMessage) && _handleSuccess(),
          root,
        })
          .then((result) => (result ? _handleSuccess() : _handleError()))
          .catch(_handleError);
      });
    }),
  );
  return every(_results);
};
