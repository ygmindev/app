// COMPLETE
import { partionObject } from '@lib/shared/core/utils/partionObject/partionObject';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ partionObject });

describe(displayName, () => {
  const VALUE = { k1: 1, k2: 2, k3: 3 };
  test('works', async () => {
    const [result1, result2] = partionObject(VALUE, (v) => v > 1);
    expect(result1).toStrictEqual({ k2: 2, k3: 3 });
    expect(result2).toStrictEqual({ k1: 1 });
  });
});
