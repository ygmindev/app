import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { borderStyler } from '@lib/frontend/style/utils/styler/borderStyler/borderStyler';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ borderStyler });

describe(displayName, () => {
  const { result } = renderHook(() => useTheme());
  const theme = result.current;

  test('works', async () => {
    const result = borderStyler({}, theme);
    expect(result).toStrictEqual({});
  });
});
