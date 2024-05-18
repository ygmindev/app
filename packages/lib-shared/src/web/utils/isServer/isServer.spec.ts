import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { isServer } from '@lib/shared/web/utils/isServer/isServer';

const { displayName } = withTest({ isServer });

describe(displayName, () => {
  test('works', async () => {
    const result = isServer;
    expect(result).toStrictEqual({});
  });
});
