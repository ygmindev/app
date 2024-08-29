import { join } from 'path';

import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ fromWorking });

describe(displayName, () => {
  test('works', async () => {
    const PATH = 'path';
    const result = fromWorking(PATH);
    expect(result).toStrictEqual(join(process.cwd(), PATH));
  });
});
