import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { backgroundStyler } from '@lib/frontend/style/utils/styler/backgroundStyler/backgroundStyler';
import { renderHook } from '@lib/frontend/test/utils/renderHook/renderHook';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ backgroundStyler });

describe(displayName, () => {
  const { result } = renderHook(() => useTheme());
  const theme = result.current;

  test('works', async () => {
    expect(backgroundStyler({}, theme)).toStrictEqual({});
    expect(backgroundStyler({ backgroundColor: '#000000' }, theme)).toStrictEqual({
      backgroundColor: '#000000',
    });
    expect(backgroundStyler({ backgroundColor: THEME_COLOR.PRIMARY }, theme)).toStrictEqual({
      backgroundColor: theme.color.palette.primary.main,
    });
    expect(
      backgroundStyler(
        { backgroundColor: THEME_COLOR.PRIMARY, backgroundRole: THEME_ROLE.CONTRAST },
        theme,
      ),
    ).toStrictEqual({ backgroundColor: theme.color.palette.primary.contrast });
  });
});
