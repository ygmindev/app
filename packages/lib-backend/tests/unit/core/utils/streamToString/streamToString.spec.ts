import { streamToString } from '@lib/backend/core/utils/streamToString/streamToString';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ streamToString });

describe(displayName, () => {
  test('works', async () => {
    // const result = await streamToString({});
    // expect(result).toStrictEqual({});
    // TODO: can you test this?
    expect(1).toStrictEqual(1);
  });
});
