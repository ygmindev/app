import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => fromExecutable });

describe(displayName, () => {
  test('works', async () => {
    const PATH = 'path';
    const result = fromExecutable(PATH);
    expect(result).toStrictEqual(fromRoot('node_modules/.bin', PATH));
  });
});
