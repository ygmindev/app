import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { collection } from '@lib/backend/resource/utils/Collection/Collection';

const { displayName } = withTest({ collection });

describe(displayName, () => {
  test('works', async () => {
    const result = await collection({});
    expect(result).toStrictEqual({});
  });
});
