import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { viewStyler } from '@lib/frontend/style/utils/styler/viewStyler/viewStyler';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ viewStyler });

describe(displayName, () => {
  const { result } = renderHook(() => useTheme());
  const theme = result.current;

  test('works', async () => {
    const result = viewStyler({}, theme);
    expect(result).toStrictEqual({});
  });
});
