import { withOneToMany } from '@lib/backend/resource/utils/withOneToManyField/withOneToManyField';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ withOneToMany });

describe(displayName, () => {
  test('works', async () => {
    const result = await withOneToMany({});
    expect(result).toStrictEqual({});
  });
});
