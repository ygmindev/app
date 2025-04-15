import { phoneNumber } from '@lib/shared/locale/utils/phoneNumber/phoneNumber';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ phoneNumber });

describe(displayName, () => {
  test('works', async () => {
    const result = await phoneNumber({});
    expect(result).toStrictEqual({});
  });
});
