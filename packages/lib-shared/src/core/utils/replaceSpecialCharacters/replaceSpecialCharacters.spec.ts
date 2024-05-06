import { replaceSpecialCharacters } from '@lib/shared/core/utils/replaceSpecialCharacters/replaceSpecialCharacters';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ replaceSpecialCharacters });

describe(displayName, () => {
  const TEST_VALUE = 'abcde12345';

  test('works', async () => {
    let result = replaceSpecialCharacters(TEST_VALUE);
    expect(result).toStrictEqual(TEST_VALUE);

    result = replaceSpecialCharacters(`${TEST_VALUE}!@#$%^&*()-+`);
    expect(result).toStrictEqual(TEST_VALUE);

    result = replaceSpecialCharacters(`${TEST_VALUE}!@#$%^&*()-+`, '_');
    expect(result).toStrictEqual(`${TEST_VALUE}____________`);
  });
});
