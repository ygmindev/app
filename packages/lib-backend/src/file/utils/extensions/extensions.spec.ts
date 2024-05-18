import { extensions } from '@lib/backend/file/utils/extensions/extensions';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ extensions });

describe(displayName, () => {
  test('works', async () => {
    const result = extensions();
    expect(result).toStrictEqual({});
  });
});
