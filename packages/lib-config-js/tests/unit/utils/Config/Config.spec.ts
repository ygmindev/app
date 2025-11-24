import { Config } from '@lib/config/utils/Config/Config';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ Config });

describe(displayName, () => {
  const CONFIG = ({
    k1,
    k2,
  }: {
    k1: number;
    k2: number;
  }): {
    v1: string;
    v2: string;
  } => ({
    v1: k1?.toString(),
    v2: k2?.toString(),
  });

  test('works', async () => {
    const { config } = new Config({
      config: CONFIG,
      params: () => ({ k1: 1, k2: 2 }),
    });
    expect(config).toStrictEqual({ v1: '1', v2: '2' });
  });

  test('overrides', async () => {
    const { config } = new Config({
      config: CONFIG,
      overrides: () => [{ k1: 1, k2: 3 }],
      params: () => ({ k1: 1, k2: 2 }),
    });
    expect(config).toStrictEqual({ v1: '1', v2: '3' });
  });
});
