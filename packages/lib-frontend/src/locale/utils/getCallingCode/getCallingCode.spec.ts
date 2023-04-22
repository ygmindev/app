import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { getCallingCode } from '@lib/frontend/locale/utils/getCallingCode/getCallingCode';

const { displayName } = withTest({ target: () => getCallingCode });

describe(displayName, () => {
  test('works', async () => {
    const result = await getCallingCode({});
    expect(result).toStrictEqual({});
  });
});
