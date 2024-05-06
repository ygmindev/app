import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ trimPathname });

describe(displayName, () => {
  const PATHNAME = '/test/path/sub-path';

  test('works with trailing slash', async () => {
    expect(trimPathname('/test/path/sub-path')).toStrictEqual(PATHNAME);
  });

  test('works with duplicate slash', async () => {
    expect(trimPathname('//test/path/sub-path')).toStrictEqual(PATHNAME);
    expect(trimPathname('///test/path/sub-path')).toStrictEqual(PATHNAME);
    expect(trimPathname('/test/path/sub-path')).toStrictEqual(PATHNAME);
    expect(trimPathname('/test//path/sub-path')).toStrictEqual(PATHNAME);
    expect(trimPathname('//test/path/sub-path')).toStrictEqual(PATHNAME);
  });

  test('works with kebab case', async () => {
    expect(trimPathname('/test/path/subPath')).toStrictEqual(PATHNAME);
    expect(trimPathname('/test/path/SUBPATH')).toStrictEqual(PATHNAME);
  });
});
