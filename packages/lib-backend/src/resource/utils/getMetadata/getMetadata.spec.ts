import { getMetadata } from '@lib/backend/resource/utils/getMetadata/getMetadata';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getMetadata });

describe(displayName, () => {
  test('works', async () => {
    const result = await getMetadata({});
    expect(result).toStrictEqual({});
  });
});
