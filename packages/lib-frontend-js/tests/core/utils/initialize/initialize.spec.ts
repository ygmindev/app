import { initialize } from '@lib/frontend/core/utils/initialize/initialize';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ initialize });

describe(displayName, () => {
  test('works', async () => {
    const result = await initialize({});
    expect(result).toStrictEqual({});
  });
});
