import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => fromPackages });

describe(displayName, () => {
  test('works', async () => {
    const PATH = 'path';
    const result = fromPackages(PATH);
    expect(result).toStrictEqual(fromRoot('packages', PATH));
  });
});
