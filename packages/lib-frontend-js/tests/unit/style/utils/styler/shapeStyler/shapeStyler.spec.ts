import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { shapeStyler } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ shapeStyler });

describe(displayName, () => {
  const { result } = renderHook(() => useTheme());
  const theme = result.current;

  test('works', async () => {
    const result = shapeStyler({}, theme);
    expect(result).toStrictEqual({});
  });
});
