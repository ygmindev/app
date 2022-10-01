import type { SleepParamsModel } from '@lib/shared/core/utils/sleep/sleep.models';
import { debug } from '@lib/shared/logging/utils/logger/logger';

export const sleep = ({
  duration = 0,
  isVerbose = false,
}: SleepParamsModel = {}): Promise<void> => {
  const _duration = duration || 0;
  const _isVerbose = isVerbose || false;

  let countdown = _duration / 1000;

  const timer =
    _isVerbose &&
    setInterval(() => {
      debug(`sleep: ${countdown}s`);
      countdown--;
      if (countdown <= 0) {
        clearInterval(timer as NodeJS.Timer);
      }
    }, 1000);

  return new Promise((resolve) => {
    setTimeout(() => {
      _isVerbose && clearInterval(timer as NodeJS.Timer);
      return resolve();
    }, _duration);
  });
};
