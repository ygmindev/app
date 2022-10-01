import { commonThemeConfig } from '@lib/config/theme/common.config';
import { darkThemeConfig } from '@lib/config/theme/dark.config';
import { lightThemeConfig } from '@lib/config/theme/light.config';
import { backgroundStyler } from '@lib/frontend/styling/utils/styler/backgroundStyler/backgroundStyler';
import {
  THEME_COLOR,
  THEME_RELATIVE_COLOR,
  THEME_SHADE,
} from '@lib/frontend/styling/utils/theme/theme.constants';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => backgroundStyler });

describe(displayName, () => {
  test('works with common theme', async () => {
    expect(backgroundStyler({})).toStrictEqual({});
    expect(backgroundStyler({ backgroundColor: '#000000' })).toStrictEqual({
      backgroundColor: '#000000',
    });
    expect(backgroundStyler({ backgroundColor: THEME_COLOR.PRIMARY })).toStrictEqual({
      backgroundColor: commonThemeConfig?.colors?.primary?.main,
    });
    expect(
      backgroundStyler({
        backgroundColor: THEME_COLOR.PRIMARY,
        backgroundShade: THEME_SHADE.LIGHT,
      }),
    ).toStrictEqual({ backgroundColor: commonThemeConfig?.colors?.primary?.light });
    expect(
      backgroundStyler({
        backgroundColor: THEME_COLOR.PRIMARY,
        backgroundShade: THEME_SHADE.DARK,
      }),
    ).toStrictEqual({ backgroundColor: commonThemeConfig?.colors?.primary?.dark });
  });

  test('works with light theme', async () => {
    expect(
      backgroundStyler({ backgroundColor: THEME_RELATIVE_COLOR.MAIN }, { theme: lightThemeConfig }),
    ).toStrictEqual({
      backgroundColor: lightThemeConfig.colors.background.main,
    });
    expect(
      backgroundStyler(
        { backgroundColor: THEME_RELATIVE_COLOR.MUTED },
        { theme: lightThemeConfig },
      ),
    ).toStrictEqual({
      backgroundColor: lightThemeConfig.colors.background.muted,
    });
    expect(
      backgroundStyler(
        { backgroundColor: THEME_RELATIVE_COLOR.CONTRAST },
        { theme: lightThemeConfig },
      ),
    ).toStrictEqual({
      backgroundColor: lightThemeConfig.colors.background.contrast,
    });
  });

  test('works with dark theme', async () => {
    expect(
      backgroundStyler({ backgroundColor: THEME_RELATIVE_COLOR.MAIN }, { theme: darkThemeConfig }),
    ).toStrictEqual({
      backgroundColor: darkThemeConfig.colors.background.main,
    });
    expect(
      backgroundStyler({ backgroundColor: THEME_RELATIVE_COLOR.MUTED }, { theme: darkThemeConfig }),
    ).toStrictEqual({
      backgroundColor: darkThemeConfig.colors.background.muted,
    });
    expect(
      backgroundStyler(
        { backgroundColor: THEME_RELATIVE_COLOR.CONTRAST },
        { theme: darkThemeConfig },
      ),
    ).toStrictEqual({
      backgroundColor: darkThemeConfig.colors.background.contrast,
    });
  });
});
