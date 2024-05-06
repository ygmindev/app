import {
  type RunWithRetryModel,
  type RunWithRetryParamsModel,
} from '@lib/shared/core/utils/runWithRetry/runWithRetry.models';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';

export const runWithRetry = async <TType = void>(
  ...[fn, { delay = 0, retries = 2 } = {}]: RunWithRetryParamsModel<TType>
): Promise<RunWithRetryModel<TType>> =>
  fn().catch(async (e) => {
    if (retries) {
      return sleep(delay).then(() => runWithRetry(fn, { delay, retries: retries - 1 }));
    }
    throw e;
  });
