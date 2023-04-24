import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { callingCode } from '@lib/frontend/locale/utils/callingCode/callingCode';

const { displayName } = withTest({ target: () => callingCode });

describe(displayName, () => {
  test('works', async () => {
    const result = await callingCode({});
    expect(result).toStrictEqual({});
  });
});
