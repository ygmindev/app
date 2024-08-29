import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { colorStyler } from '@lib/frontend/style/utils/styler/colorStyler/colorStyler';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ colorStyler });

describe(displayName, () => {
  const { result } = renderHook(() => useTheme());
  const theme = result.current;

  test('works', async () => {
    const result = colorStyler({}, theme);
    expect(result).toStrictEqual({});
  });
});
