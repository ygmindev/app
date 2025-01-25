import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { initialize } from '@service/server/setup/utils/initialize/initialize';

const { displayName } = withTest({ initialize });

describe(displayName, () => {
  test('works', async () => {
    const result = await initialize({});
    expect(result).toStrictEqual({});
  });
});
