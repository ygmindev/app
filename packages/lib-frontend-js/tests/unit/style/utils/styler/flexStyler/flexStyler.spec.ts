import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { flexStyler } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ flexStyler });

describe(displayName, () => {
  const { result } = renderHook(() => useTheme());
  const theme = result.current;

  test('works', async () => {
    const result = flexStyler({}, theme);
    expect(result).toStrictEqual({});
  });
});
