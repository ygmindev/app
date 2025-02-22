import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { runWebsocket } from '@lib/backend/http/utils/runWebsocket/runWebsocket';

const { displayName } = withTest({ runWebsocket });

describe(displayName, () => {
  test('works', async () => {
    const result = await runWebsocket({});
    expect(result).toStrictEqual({});
  });
});
