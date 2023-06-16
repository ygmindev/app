import { parseLanguageUrl } from '#lib-shared/locale/utils/parseLanguageUrl/parseLanguageUrl';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ parseLanguageUrl });

describe(displayName, () => {
  const LANG = 'en';
  test('works', async () => {
    const result = parseLanguageUrl(`/${LANG}/1/2`);
    expect(result).toStrictEqual({ lang: LANG, url: '/1/2' });
  });
});
