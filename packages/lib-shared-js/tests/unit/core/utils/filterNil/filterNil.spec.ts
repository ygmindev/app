import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ filterNil });

describe(displayName, () => {
  const VALUE = ['value', 1];
  test('works', async () => {
    const result = filterNil([...VALUE, '', false, null, undefined, 0]);
    expect(result).toStrictEqual(VALUE);
  });
});
