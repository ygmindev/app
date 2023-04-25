import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { country } from '@lib/frontend/locale/utils/country/country';

const { displayName } = withTest({ target: () => country });

describe(displayName, () => {
  test('works', async () => {
    const result = await country({});
    expect(result).toStrictEqual({});
  });
});
