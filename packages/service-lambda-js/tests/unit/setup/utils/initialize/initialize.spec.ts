import { initialize } from 'packages/service-lambda/src/setup/utils/initialize/initialize';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ initialize });

describe(displayName, () => {
  test('works', async () => {
    const result = await initialize({});
    expect(result).toStrictEqual({});
  });
});
