import { generateResourceId } from '@lib/shared/resource/utils/generateResourceId/generateResourceId';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ generateResourceId });

describe(displayName, () => {
  test('works', async () => {
    const result = await generateResourceId({});
    expect(result).toStrictEqual({});
  });
});
