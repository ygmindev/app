import { streamToString } from '@lib/backend/core/utils/streamToString/streamToString';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => streamToString });

describe(displayName, () => {
  test('works', async () => {
    const result = await streamToString({});
    expect(result).toStrictEqual({});
  });
});
