import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { objectId } from '@lib/backend/database/utils/ObjectId/ObjectId';

const { displayName } = withTest({ objectId });

describe(displayName, () => {
  test('works', async () => {
    const result = await objectId({});
    expect(result).toStrictEqual({});
  });
});
