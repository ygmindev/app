// COMPLETE
import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ defineConfig });

describe(displayName, () => {
  const _CONFIG = ({
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

  test('works with static', async () => {
    const { _config } = defineConfig({
      _config: _CONFIG,
      config: { k1: 1, k2: 2 },
    });
    expect(_config).toStrictEqual({ v1: '1', v2: '2' });
  });

  test('works with static overrides', async () => {
    const { _config } = defineConfig({
      _config: _CONFIG,
      config: { k1: 1, k2: 2 },
      overrides: [{ k1: 1, k2: 3 }],
    });
    expect(_config).toStrictEqual({ v1: '1', v2: '3' });
  });

  test('works with dynamic', async () => {
    const { _config } = defineConfig({
      _config: _CONFIG,
      config: () => ({ k1: 1, k2: 2 }),
    });
    expect(_config()).toStrictEqual({ v1: '1', v2: '2' });
  });

  test('works with dynamic overrides', async () => {
    const { _config } = defineConfig({
      _config: _CONFIG,
      config: () => ({ k1: 1, k2: 2 }),
      overrides: () => [{ k1: 1, k2: 3 }],
    });
    expect(_config()).toStrictEqual({ v1: '1', v2: '3' });
  });
});
