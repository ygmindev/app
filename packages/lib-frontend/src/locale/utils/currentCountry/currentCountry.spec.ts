import { currentCountry } from '@lib/frontend/locale/utils/currentCountry/currentCountry';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ currentCountry });

describe(displayName, () => {
  test('works', async () => {
    const result = await currentCountry({});
    expect(result).toStrictEqual({});
  });
});
