import { getFingerprintInput } from '@lib/backend/billing/utils/getFingerprintInput/getFingerprintInput';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getFingerprintInput });

describe(displayName, () => {
  test('works', async () => {
    const result = await getFingerprintInput({});
    expect(result).toStrictEqual({});
  });
});
