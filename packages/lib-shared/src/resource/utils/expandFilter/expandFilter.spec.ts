import { expandFilter } from '@lib/shared/resource/utils/expandFilter/expandFilter';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ expandFilter });

describe(displayName, () => {
  test('works', async () => {
    const result = await expandFilter({});
    expect(result).toStrictEqual({});
  });
});
