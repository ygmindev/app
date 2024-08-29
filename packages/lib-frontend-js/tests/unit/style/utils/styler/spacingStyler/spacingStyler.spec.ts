import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { spacingStyler } from '@lib/frontend/style/utils/styler/spacingStyler/spacingStyler';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ spacingStyler });

describe(displayName, () => {
  const { result } = renderHook(() => useTheme());
  const theme = result.current;

  test('works', async () => {
    const result = spacingStyler({}, theme);
    expect(result).toStrictEqual({});
  });
});
