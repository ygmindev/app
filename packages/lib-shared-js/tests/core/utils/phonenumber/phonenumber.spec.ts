import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { phonenumber } from '@lib/shared/js/users/yoongeemin/developer/projects/app/packages/lib/shared/js/src/core/utils/phonenumber/phonenumber';

const { displayName } = withTest({ phonenumber });

describe(displayName, () => {
  test('works', async () => {
    const result = await phonenumber({});
    expect(result).toStrictEqual({});
  });
});
