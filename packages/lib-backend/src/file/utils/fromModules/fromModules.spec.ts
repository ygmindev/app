import { fromModules } from '@lib/backend/file/utils/fromModules/fromModules';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ fromModules });

describe(displayName, () => {
  test('works', async () => {
    const PATH = 'path';
    const result = fromModules(PATH);
    expect(result).toStrictEqual(fromWorking(PATH, 'node_modules'));
  });
});
