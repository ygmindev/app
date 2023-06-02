import type { PhoneNumberModel } from '@lib/shared/locale/locale.models';
import { parsePhoneNumber } from '@lib/shared/locale/utils/parsePhoneNumber/parsePhoneNumber';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ parsePhoneNumber });

describe(displayName, () => {
  const TEST_VALUE: PhoneNumberModel = {
    callingCode: '1',
    extension: undefined,
    phone: '9171234567',
  };

  test('works', async () => {
    let result = parsePhoneNumber('+19171234567');
    expect(result).toStrictEqual(TEST_VALUE);

    result = parsePhoneNumber('+1 917 123 4567');
    expect(result).toStrictEqual(TEST_VALUE);

    result = parsePhoneNumber('+1 (917) 123 4567');
    expect(result).toStrictEqual(TEST_VALUE);

    result = parsePhoneNumber('+1 917-123-4567');
    expect(result).toStrictEqual(TEST_VALUE);

    result = parsePhoneNumber('19171234567');
    expect(result).toStrictEqual(TEST_VALUE);
  });
});
