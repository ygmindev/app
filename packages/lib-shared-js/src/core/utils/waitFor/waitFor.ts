import {
  WAIT_FOR_INTERVAL_DEFAULT_MILLISECONDS,
  WAIT_FOR_TIMEOUT_DEFAULT_MILLISECONDS,
} from '@lib/shared/core/utils/waitFor/waitFor.constants';
import { type WaitForParamsModel } from '@lib/shared/core/utils/waitFor/waitFor.models';

export const waitFor = ({
  condition,
  interval = WAIT_FOR_INTERVAL_DEFAULT_MILLISECONDS,
  timeout = WAIT_FOR_TIMEOUT_DEFAULT_MILLISECONDS,
}: WaitForParamsModel): Promise<boolean> =>
  new Promise((resolve) => {
    let timer = 0;
    const loop = setInterval(() => {
      timer += interval;
      if (condition()) {
        clearInterval(loop);
        resolve(true);
      }
      if (timer >= timeout) {
        clearInterval(loop);
        resolve(false);
      }
    }, interval);
  });
