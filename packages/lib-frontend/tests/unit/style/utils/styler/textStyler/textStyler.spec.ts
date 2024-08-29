import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ textStyler });

describe(displayName, () => {
  const { result } = renderHook(() => useTheme());
  const theme = result.current;

  test('works', async () => {
    const result = textStyler({}, theme);
    expect(result).toStrictEqual({});
  });
});
