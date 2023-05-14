import { callingCode } from '@lib/frontend/locale/utils/callingCode/callingCode';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ callingCode });

describe(displayName, () => {
  test('works', async () => {
    const result = await callingCode({});
    expect(result).toStrictEqual({});
  });
});
