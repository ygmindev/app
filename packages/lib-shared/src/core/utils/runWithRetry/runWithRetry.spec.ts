import { runWithRetry } from '@lib/shared/core/utils/runWithRetry/runWithRetry';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ runWithRetry });

describe(displayName, () => {
  test('works', async () => {
    let count = 0;
    const SUCCESS_AFTER = 3;
    const result = await runWithRetry(
      async () => {
        if (count == SUCCESS_AFTER) {
          return true;
        }
        count++;
        throw new Error();
      },
      { retries: SUCCESS_AFTER },
    );
    expect(result).toStrictEqual(true);
  });
});
