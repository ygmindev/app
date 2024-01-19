import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ joinPaths });

describe(displayName, () => {
  test('works', async () => {
    const result = joinPaths([]);
    expect(result).toStrictEqual({});
  });
});
