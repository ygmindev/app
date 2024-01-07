import { type SleepParamsModel } from '#lib-shared/core/utils/sleep/sleep.models';
import { debug } from '#lib-shared/logging/utils/logger/logger';

export const sleep = (...[duration = 0, options]: SleepParamsModel): Promise<void> => {
  const isVerboseF = options?.isVerbose || process.env.NODE_ENV === 'development';

  let countdown = duration / 1000;

  const timer =
    isVerboseF &&
    setInterval(() => {
      debug(`${countdown}s`);
      countdown--;
      if (countdown <= 0) {
        clearInterval(timer as unknown as number);
      }
    }, 1000);

  return new Promise((resolve) => {
    setTimeout(() => {
      isVerboseF && clearInterval(timer as unknown as number);
      return resolve();
    }, duration);
  });
};
