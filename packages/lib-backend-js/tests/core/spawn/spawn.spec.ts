import { withTest } from '@lib/shared/test/utils/withTest/withTest';
import { spawn } from '@lib/backend/core/spawn/spawn';

const { displayName } = withTest({ spawn });

describe(displayName, () => {
  test('works', async () => {
    const result = await spawn({});
    expect(result).toStrictEqual({});
  });
});
