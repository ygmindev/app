import { promisify } from '@lib/shared/core/utils/promisify/promisify';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => promisify });

describe(displayName, () => {
  test('works', async () => {
    expect(await promisify(() => Promise.resolve(true))()).toStrictEqual(true);
    expect(await promisify(() => true)()).toStrictEqual(true);
  });
});
