import { isSsr } from '@lib/frontend/platform/utils/isSsr/isSsr';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => isSsr });

describe(displayName, () => {
  test('works', async () => {
    const result = isSsr;
    expect(result).toStrictEqual({});
  });
});
