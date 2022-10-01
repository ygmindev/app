import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => fromStatic });

describe(displayName, () => {
  test('works', async () => {
    const PATH = 'path';
    const result = fromStatic(PATH);
    expect(result).toStrictEqual(fromRoot('packages/asset-static', PATH));
  });
});
