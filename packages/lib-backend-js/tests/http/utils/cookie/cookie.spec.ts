import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { cookie } from '@lib/backend/http/utils/cookie/cookie';

const { displayName } = withTest({ cookie });

describe(displayName, () => {
  test('works', async () => {
    const result = await cookie({});
    expect(result).toStrictEqual({});
  });
});
