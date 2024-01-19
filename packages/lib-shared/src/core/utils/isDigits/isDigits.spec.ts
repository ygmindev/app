import { isDigits } from '@lib/shared/core/utils/isDigits/isDigits';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isDigits });

describe(displayName, () => {
  test('works with positive', async () => {
    let result = isDigits('12345');
    expect(result).toStrictEqual(true);

    result = isDigits('01234');
    expect(result).toStrictEqual(true);
  });

  test('works with negative', async () => {
    let result = isDigits('');
    expect(result).toStrictEqual(false);

    result = isDigits('1.2345');
    expect(result).toStrictEqual(false);

    result = isDigits('test');
    expect(result).toStrictEqual(false);

    result = isDigits('test12345');
    expect(result).toStrictEqual(false);
  });
});
