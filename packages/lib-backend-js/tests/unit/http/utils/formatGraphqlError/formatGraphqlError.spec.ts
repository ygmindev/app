import { formatGraphqlError } from '@lib/backend/http/utils/formatGraphqlError/formatGraphqlError';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ formatGraphqlError });

describe(displayName, () => {
  test('works', async () => {
    const result = await formatGraphqlError({});
    expect(result).toStrictEqual({});
  });
});
