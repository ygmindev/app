import { type PhoneNumberValueModel } from '@lib/shared/locale/locale.models';
import { phoneParse } from '@lib/shared/locale/utils/phoneParse/phoneParse';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ phoneParse });

describe(displayName, () => {
  const TEST_VALUE: PhoneNumberValueModel = {
    callingCode: '1',
    extension: undefined,
    phone: '9171234567',
  };

  test('works', async () => {
    let result = phoneParse('+19171234567');
    expect(result).toStrictEqual(TEST_VALUE);

    result = phoneParse('+1 917 123 4567');
    expect(result).toStrictEqual(TEST_VALUE);

    result = phoneParse('+1 (917) 123 4567');
    expect(result).toStrictEqual(TEST_VALUE);

    result = phoneParse('+1 917-123-4567');
    expect(result).toStrictEqual(TEST_VALUE);

    result = phoneParse('19171234567');
    expect(result).toStrictEqual(TEST_VALUE);

    result = phoneParse('12345');
    expect(result).toStrictEqual(null);

    result = phoneParse('abcde');
    expect(result).toStrictEqual(null);
  });
});
