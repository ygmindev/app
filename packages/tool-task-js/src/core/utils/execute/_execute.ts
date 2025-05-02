import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import {
  type _ExecuteModel,
  type _ExecuteParamsModel,
} from '@tool/task/core/utils/execute/_execute.models';
import { execa } from 'execa';

export const _execute = async ({
  command,
  onFinish,
  onStart,
  root = fromWorking(),
}: _ExecuteParamsModel): Promise<_ExecuteModel> => {
  const cp = execa({
    cwd: root,
    env: process.env,
    shell: true,
    stdout: 'inherit',
  })`${command}`;

  const { pid, stdout } = cp;
  pid && onStart?.(pid);

  // stdout.pipe(process.stdout);

  try {
    const { stdout } = await cp;
    return stdout ?? '';
  } finally {
    pid && onFinish?.(pid);
  }
};
