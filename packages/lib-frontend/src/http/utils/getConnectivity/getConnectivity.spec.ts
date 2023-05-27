import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { getConnectivity } from '@lib/frontend/http/utils/getConnectivity/getConnectivity';

const { displayName } = withTest({ getConnectivity });

describe(displayName, () => {
  test('works', async () => {
    const result = await getConnectivity({});
    expect(result).toStrictEqual({});
  });
});
