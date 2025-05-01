import {
  type _ExecuteModel,
  type _ExecuteParamsModel,
} from '@tool/task/core/utils/execute/_execute.models';
import { execa } from 'execa';

export const _execute = async ({
  command,
  onFinish,
  onStart,
  root,
}: _ExecuteParamsModel): Promise<_ExecuteModel> => {
  const cp = execa({
    cwd: root,
    env: process.env,
    shell: true,
    stdin: 'inherit',
    stdout: 'pipe',
  })`${command}`;

  const { pid } = cp;
  pid && onStart?.(pid);

  try {
    const { stdout } = await cp;
    return stdout;
  } finally {
    pid && onFinish?.(pid);
  }
};
