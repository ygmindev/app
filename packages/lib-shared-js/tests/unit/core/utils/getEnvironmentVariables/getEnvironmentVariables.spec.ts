import { getEnvironmentVariables } from '@lib/shared/core/utils/getEnvironmentVariables/getEnvironmentVariables';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getEnvironmentVariables });

describe(displayName, () => {
  test('works', async () => {
    const result = await getEnvironmentVariables({});
    expect(result).toStrictEqual({});
  });
});
