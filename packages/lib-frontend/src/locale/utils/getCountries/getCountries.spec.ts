import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { getCountries } from '@lib/frontend/locale/utils/getCountries/getCountries';

const { displayName } = withTest({ target: () => getCountries });

describe(displayName, () => {
  test('works', async () => {
    const result = await getCountries({});
    expect(result).toStrictEqual({});
  });
});
