import { error, info } from '@lib/shared/logging/utils/logger/logger';
import type { _CommandParamsModel } from '@tool/task/core/utils/command/_command.models';
import { spawn } from 'child_process';

export const _command = async ({
  command,
  isSilent,
  onData,
  onError,
  root,
}: _CommandParamsModel): Promise<boolean> => {
  const cp = spawn(command, {
    cwd: root,
    env: process.env,
    shell: true,
    stdio: isSilent ? 'pipe' : 'inherit',
  });
  cp.stdout?.on('data', (data) => {
    onData && onData(data);
    !isSilent && info(data);
  });
  cp.stderr?.on('data', (data) => {
    onError && onError(data);
    !isSilent && error(data);
  });
  return new Promise((resolve) => {
    ['exit', 'close'].forEach((event) => cp.on(event, (code) => resolve(code === 0)));
  });
};
