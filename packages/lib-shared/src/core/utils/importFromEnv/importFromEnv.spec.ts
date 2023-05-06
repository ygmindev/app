import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ target: () => importFromEnv });

describe(displayName, () => {
  test('works', async () => {
    const result = await importFromEnv('test');
    expect(result).toStrictEqual({});
  });
});
