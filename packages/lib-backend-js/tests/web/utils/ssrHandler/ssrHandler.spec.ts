import { ssrHandler } from '@lib/backend/web/utils/ssrHandler/ssrHandler';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ ssrHandler });

describe(displayName, () => {
  test('works', async () => {
    const result = await ssrHandler({});
    expect(result).toStrictEqual({});
  });
});
