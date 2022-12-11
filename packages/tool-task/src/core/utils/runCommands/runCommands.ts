import { setup } from '@lib/shared/environment/utils/setup/setup';
import { error, info } from '@lib/shared/logging/utils/logger/logger';
import { command as _command } from '@tool/task/core/utils/command/command';
import type { RunCommandsParamsModel } from '@tool/task/core/utils/runCommands/runCommands.models';
import { every } from 'lodash';

export const runCommands = async ({ commands }: RunCommandsParamsModel): Promise<boolean> => {
  const results = await Promise.all(
    commands.map(({ command, completeMessage, environment, overrides, root }) => {
      setup({ environment, overrides });
      info(`Starting ${command}`);
      return new Promise<boolean>((resolve, reject) => {
        const _handleSuccess = (): void => {
          info(`Success: ${command}`);
          resolve(true);
        };
        const _handleError = (): void => {
          error(`Error: ${command}`);
          reject(false);
        };
        _command({
          command,
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
  return every(results);
};
