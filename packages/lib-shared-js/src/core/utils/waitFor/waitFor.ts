import {
  WAIT_FOR_INTERVAL_DEFAULT_MILLISECONDS,
  WAIT_FOR_TIMEOUT_DEFAULT_MILLISECONDS,
} from '@lib/shared/core/utils/waitFor/waitFor.constants';
import { type WaitForParamsModel } from '@lib/shared/core/utils/waitFor/waitFor.models';

export const waitFor = ({ condition, interval, timeout }: WaitForParamsModel): Promise<boolean> =>
  new Promise((resolve) => {
    const intervalF = interval || WAIT_FOR_INTERVAL_DEFAULT_MILLISECONDS;
    const timeoutF = timeout || WAIT_FOR_TIMEOUT_DEFAULT_MILLISECONDS;
    let timer = 0;
    const loop = setInterval(() => {
      timer += intervalF;
      if (condition()) {
        clearInterval(loop);
        resolve(true);
      }
      if (timer >= timeoutF) {
        clearInterval(loop);
        resolve(false);
      }
    }, intervalF);
  });
