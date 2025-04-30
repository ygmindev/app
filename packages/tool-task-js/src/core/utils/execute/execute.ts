import {
  type ExecuteModel,
  type ExecuteParamsModel,
} from '@tool/task/core/utils/execute/execute.models';
import { spawn } from 'child_process';

export const execute = async ({
  command,
  onError,
  onFinish,
  onMessage,
  onStart,
  root,
}: ExecuteParamsModel): Promise<ExecuteModel> => {
  let output = '';

  const cp = spawn(command, {
    cwd: root,
    env: process.env,
    shell: true,
    stdio: 'pipe',
  });

  const { pid } = cp;
  pid && onStart?.(pid);

  return new Promise((resolve, reject) => {
    const handleFinish = (): void => {
      pid && onFinish?.(pid);
    };

    const handleSuccess = (): void => {
      handleFinish();
      resolve(output);
    };

    const handleError = (message: string): void => {
      handleFinish();
      const e = new Error(message);
      onError?.(e);
      reject(e);
    };

    cp.stdout?.on('data', (v: Buffer) => {
      const message = v.toString('utf8');
      onMessage?.(message);
      output += message;
    });

    cp.once('SIGTERM', handleSuccess);
    cp.once('SIGINT', handleSuccess);
    cp.once('close', handleSuccess);
    cp.once('exit', handleSuccess);
    cp.once('uncaughtException', handleError);
    cp.once('unhandledRejection', handleError);
  });
};
