import { toComponentClass } from '@lib/frontend/core/utils/toComponentClass/toComponentClass';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => toComponentClass });

describe(displayName, () => {
  test('works', async () => {
    const result = await toComponentClass({});
    expect(result).toStrictEqual({});
  });
});
