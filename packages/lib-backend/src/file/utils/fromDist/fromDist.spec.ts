import { fromDist } from '@lib/backend/file/utils/fromDist/fromDist';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ fromDist });

describe(displayName, () => {
  test('works', async () => {
    const PATH = 'path';
    const result = fromDist(PATH);
    expect(result).toStrictEqual(fromRoot('packages/lib-config/src', PATH));
  });
});
