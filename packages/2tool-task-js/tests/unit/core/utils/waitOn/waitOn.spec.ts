import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { waitOn } from '@tool/task/core/utils/waitOn/waitOn';

const { displayName } = withTest({ waitOn });

describe(displayName, () => {
  test('works', async () => {
    const result = await waitOn({});
    expect(result).toStrictEqual({});
  });
});
