import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { resolve } from 'path';

const { displayName } = withTest({ target: () => fromWorking });

describe(displayName, () => {
  test('works', async () => {
    const PATH = 'path';
    const result = fromWorking(PATH);
    expect(result).toStrictEqual(resolve(process.cwd(), PATH));
  });
});
