import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { fontStyler } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ fontStyler });

describe(displayName, () => {
  const { result } = renderHook(() => useTheme());
  const theme = result.current;

  test('works', async () => {
    const result = fontStyler({}, theme);
    expect(result).toStrictEqual({});
  });
});
