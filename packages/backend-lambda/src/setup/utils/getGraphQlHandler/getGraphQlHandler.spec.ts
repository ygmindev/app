import { getGraphQlHandler } from '#backend-lambda/setup/utils/getGraphQlHandler/getGraphQlHandler';
import { withTest } from '#lib-shared/test/utils/withTest/withTest';

const { displayName } = withTest({ getGraphQlHandler });

describe(displayName, () => {
  test('works', async () => {
    const result = await getGraphQlHandler();
    expect(result).toStrictEqual({});
  });
});
