import { spawn } from 'child_process';

import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { error, info } from '#lib-shared/logging/utils/logger/logger';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import {
  type _CommandModel,
  type _CommandParamsModel,
} from '#tool-task/core/utils/command/_command.models';

export const _command = async (
  ...[
    command,
    { isSilent = false, onData = undefined, root = fromRoot() } = {},
  ]: _CommandParamsModel
): _CommandModel => {
  try {
    info(command);
    const cp = spawn(command, {
      cwd: root,
      env: process.env,
      shell: true,
      stdio: isSilent ? 'pipe' : 'inherit',
    });
    cp.stdout?.on('data', (data: Buffer) => {
      onData && onData(data.toString());
    });
    cp.stderr?.on('data', (data: Buffer) => {
      onData && onData(data.toString());
    });
    await new Promise((resolve) => {
      ['exit', 'close'].forEach((event) => cp.on(event, (code) => resolve(code === 0)));
    });
    return { status: TASK_STATUS.SUCCESS };
  } catch (e) {
    error(e);
    return { error: e as Error, status: TASK_STATUS.ERROR };
  }
};
