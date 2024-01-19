import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ fromRoot });

describe(displayName, () => {
  test('works', async () => {
    const PATH = 'path';
    const result = fromRoot(PATH);
    expect(result).toStrictEqual(fromWorking(PATH));
  });
});
