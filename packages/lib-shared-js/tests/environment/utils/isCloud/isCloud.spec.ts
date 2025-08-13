import { isCloud } from '@lib/shared/environment/utils/isCloud/isCloud';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isCloud });

describe(displayName, () => {
  test('works', async () => {
    const result = await isCloud({});
    expect(result).toStrictEqual({});
  });
});
