import { getValue } from '@lib/shared/core/utils/getValue/getValue';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getValue });

describe(displayName, () => {
  const VALUE = {
    k1: 'v1',
    k2: {
      k21: 'v21',
      k22: 'v22',
    },
  };

  test('works with depth 1', async () => {
    const result = getValue(VALUE, 'k1');
    expect(result).toStrictEqual('v1');
  });

  test('works with depth 2', async () => {
    const result = getValue(VALUE, 'k2.k22');
    expect(result).toStrictEqual('v22');
  });

  test('works with default', async () => {
    const result = getValue(VALUE, 'k2.k23', 'default');
    expect(result).toStrictEqual('default');
  });
});
