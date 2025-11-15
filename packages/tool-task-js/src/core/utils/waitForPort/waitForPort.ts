import {
  WAIT_FOR_PORT_INTERVAL,
  WAIT_FOR_PORT_TIMEOUT,
} from '@tool/task/core/utils/waitForPort/waitForPort.constants';
import {
  type WaitForPortModel,
  type WaitForPortParamsModel,
} from '@tool/task/core/utils/waitForPort/waitForPort.models';
import { Socket } from 'net';

export const waitForPort = async ({
  host = '127.0.0.1',
  interval,
  port,
  timeout,
}: WaitForPortParamsModel): Promise<WaitForPortModel> => {
  const timeoutF = timeout ?? WAIT_FOR_PORT_TIMEOUT;
  const intervalF = interval ?? WAIT_FOR_PORT_INTERVAL;
  const start = Date.now();

  return new Promise((resolve, reject) => {
    const check = (): void => {
      const socket = new Socket();

      const handleError = (): void => {
        socket.destroy();
        if (Date.now() - start > timeoutF) {
          reject(new Error(`Timeout waiting for port ${port}`));
        } else {
          setTimeout(check, intervalF);
        }
      };

      socket
        .setTimeout(1000)
        .once('connect', () => {
          socket.destroy();
          resolve(true);
        })
        .once('error', handleError)
        .once('timeout', handleError)
        .connect(port, host);
    };

    check();
  });
};
