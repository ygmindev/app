import { fromBuild } from '#lib-backend/file/utils/fromBuild/fromBuild';
import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ fromBuild });

describe(displayName, () => {
  test('works', async () => {
    const PATH = 'path';
    const result = fromBuild(PATH);
    expect(result).toStrictEqual(fromRoot('packages/lib-config/src', PATH));
  });
});
