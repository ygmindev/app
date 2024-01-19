import { isServer } from '@lib/platform/core/utils/isServer/isServer';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isServer });

describe(displayName, () => {
  test('works', async () => {
    const result = isServer;
    expect(result).toStrictEqual({});
  });
});
