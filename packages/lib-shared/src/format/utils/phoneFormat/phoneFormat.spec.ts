import { phoneFormat } from '@lib/shared/format/utils/phoneFormat/phoneFormat';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => phoneFormat });

describe(displayName, () => {
  test('works', async () => {
    const result = phoneFormat('+19171234567');
    expect(result).toStrictEqual('+1 917 123 4567');
  });
});
