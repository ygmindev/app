import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import {
  type _ExecuteModel,
  type _ExecuteParamsModel,
} from '@tool/task/core/tasks/execute/_execute.models';
import { execa } from 'execa';

export const _execute = async ({
  command,
  isInteractive,
  isSilent,
  onFinish,
  onStart,
  root = fromWorking(),
}: _ExecuteParamsModel): Promise<_ExecuteModel> => {
  const stdio = filterNil([!isSilent && 'inherit', 'pipe']);
  const cp = execa({
    cwd: root,
    env: process.env,
    shell: true,
    ...(isInteractive ? { stdio: 'inherit' } : { stderr: stdio, stdout: stdio }),
  })`${command}`;

  const pidF = cp.pid;
  pidF && onStart?.(pidF);

  const handleFinish = (): void => {
    pidF && onFinish?.(pidF);
  };

  cp.once('SIGTERM', handleFinish);
  cp.once('SIGINT', handleFinish);

  try {
    const { stdout } = await cp;
    return stdout ?? '';
  } finally {
    handleFinish();
  }
};
