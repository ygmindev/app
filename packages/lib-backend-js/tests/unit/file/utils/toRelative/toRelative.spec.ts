import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { toRelative } from '@lib/backend/file/utils/toRelative/toRelative';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';
const { displayName } = withTest({ toRelative });

describe(displayName, () => {
  test('works', async () => {
    const result = toRelative({ from: fromPackages(), to: fromRoot() });
    expect(result).toStrictEqual('..');
  });
});
