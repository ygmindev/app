import { ObjectId } from '@lib/backend/database/utils/ObjectId/ObjectId';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ ObjectId });

describe(displayName, () => {
  test('works', async () => {
    const result = new ObjectId();
    expect(result).toStrictEqual({});
  });
});
