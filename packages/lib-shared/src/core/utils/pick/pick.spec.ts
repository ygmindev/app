import { pick } from '@lib/shared/core/utils/pick/pick';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => pick });

describe(displayName, () => {
  const VALUE = {
    k1: 'v1',
    k2: {
      k21: 'v21',
      k22: 'v22',
    },
  };

  test('works with unnested', async () => {
    const result = pick({ keys: ['k1'], value: VALUE });
    expect(result).toStrictEqual({ k1: 'v1' });
  });

  test('works with nested', async () => {
    const result = pick({ keys: ['k2.k22'], value: VALUE });
    expect(result).toStrictEqual({ k2: { k22: 'v22' } });
  });
});
