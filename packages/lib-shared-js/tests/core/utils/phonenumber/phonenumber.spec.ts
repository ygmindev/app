import { phonenumber } from '@lib/shared/locale/utils/phonenumber/phonenumber';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ phonenumber });

describe(displayName, () => {
  test('works', async () => {
    const result = await phonenumber({});
    expect(result).toStrictEqual({});
  });
});
