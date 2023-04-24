import { countries } from '@lib/frontend/locale/utils/countries/countries';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => countries });

describe(displayName, () => {
  test('works', async () => {
    const result = await countries({});
    expect(result).toStrictEqual({});
  });
});
