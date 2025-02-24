import { withRootField } from '@lib/backend/resource/utils/withRootField/withRootField';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withRootField });

describe(displayName, () => {
  test('works', async () => {
    const result = await withRootField({});
    expect(result).toStrictEqual({});
  });
});
