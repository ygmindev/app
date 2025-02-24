import { withManyToManyField } from '@lib/backend/resource/utils/withManyToManyField/withManyToManyField';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withManyToManyField });

describe(displayName, () => {
  test('works', async () => {
    const result = await withManyToManyField({});
    expect(result).toStrictEqual({});
  });
});
