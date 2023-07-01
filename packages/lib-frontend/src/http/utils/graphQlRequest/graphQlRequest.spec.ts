import { graphQlRequest } from '#lib-frontend/http/utils/graphQlRequest/graphQlRequest';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ graphQlRequest });

describe(displayName, () => {
  test('works', async () => {
    const result = await graphQlRequest({});
    expect(result).toStrictEqual({});
  });
});
