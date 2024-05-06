import { resolveFirst } from '@lib/shared/core/utils/resolveFirst/resolveFirst';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ resolveFirst });

describe(displayName, () => {
  test('works', async () => {
    const result = await resolveFirst([
      async () => Promise.reject(new Error('1')),
      async () => Promise.resolve('2'),
      async () => Promise.resolve('3'),
    ]);
    expect(result).toStrictEqual('2');
  });

  test('works with reject', async () => {
    const result = async (): Promise<unknown> =>
      resolveFirst([
        async () => Promise.reject(new Error('1')),
        async () => Promise.reject(new Error('2')),
        async () => Promise.reject(new Error('3')),
      ]);
    await expect(result).rejects.toThrow('3');
  });
});
