import { fromExecutable } from '@lib/backend/file/utils/fromExecutable/fromExecutable';
import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ fromExecutable });

describe(displayName, () => {
  test('works', async () => {
    const PATH = 'path';
    const result = fromExecutable(PATH);
    expect(result).toStrictEqual(fromModules('.bin', PATH));
  });
});
