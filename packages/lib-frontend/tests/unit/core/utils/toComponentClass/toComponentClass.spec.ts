import { toComponentClass } from '@lib/frontend/core/utils/toComponentClass/toComponentClass';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ toComponentClass });

describe(displayName, () => {
  test('works', async () => {
    const result = toComponentClass();
    expect(result).toStrictEqual({});
  });
});
