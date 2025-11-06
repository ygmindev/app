import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { bundle } from '@tool/task/node/utils/bundle/bundle';

const { displayName } = withTest({ bundle });

describe(displayName, () => {
  test('works', async () => {
    const result = await bundle({});
    expect(result).toStrictEqual({});
  });
});
