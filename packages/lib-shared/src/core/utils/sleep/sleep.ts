import type { SleepParamsModel } from '#lib-shared/core/utils/sleep/sleep.models';
import { debug } from '#lib-shared/logging/utils/logger/logger';

export const sleep = ({ duration = 0, isVerbose = true }: SleepParamsModel = {}): Promise<void> => {
  const durationF = duration || 0;
  const isVerboseF = isVerbose || false;

  let countdown = durationF / 1000;

  const timer =
    isVerboseF &&
    setInterval(() => {
      debug(sleep, `${countdown}s`);
      countdown--;
      if (countdown <= 0) {
        clearInterval(timer as NodeJS.Timer);
      }
    }, 1000);

  return new Promise((resolve) => {
    setTimeout(() => {
      isVerboseF && clearInterval(timer as NodeJS.Timer);
      return resolve();
    }, durationF);
  });
};
