import { withManyToOneField } from '@lib/backend/resource/utils/withManyToOneField/withManyToOneField';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withManyToOneField });

describe(displayName, () => {
  test('works', async () => {
    const result = await withManyToOneField({});
    expect(result).toStrictEqual({});
  });
});
