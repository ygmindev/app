import { isTranslatableText } from '@lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { withTest } from '@lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ isTranslatableText });

describe(displayName, () => {
  test('works', async () => {
    const result = await isTranslatableText({});
    expect(result).toStrictEqual({});
  });
});
