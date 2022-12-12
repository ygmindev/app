import { themeCommonConfig } from '@lib/config/style/theme/configs/common';
import { themeDarkConfig } from '@lib/config/style/theme/configs/theme.dark';
import { themeLightConfig } from '@lib/config/style/theme/configs/theme.light';
import { backgroundStyler } from '@lib/frontend/style/utils/styler/backgroundStyler/backgroundStyler';
import {
  THEME_COLOR,
  THEME_RELATIVE_COLOR,
  THEME_SHADE,
} from '@lib/frontend/style/utils/theme/theme.constants';
import { withTest } from '@lib/shared/testing/utils/withTest/withTest';

const { displayName } = withTest({ target: () => backgroundStyler });

describe(displayName, () => {
  test('works with common theme', async () => {
    expect(backgroundStyler({})).toStrictEqual({});
    expect(backgroundStyler({ backgroundColor: '#000000' })).toStrictEqual({
      backgroundColor: '#000000',
    });
    expect(backgroundStyler({ backgroundColor: THEME_COLOR.PRIMARY })).toStrictEqual({
      backgroundColor: themeCommonConfig?.colors?.primary?.main,
    });
    expect(
      backgroundStyler({
        backgroundColor: THEME_COLOR.PRIMARY,
        backgroundShade: THEME_SHADE.LIGHT,
      }),
    ).toStrictEqual({ backgroundColor: themeCommonConfig?.colors?.primary?.light });
    expect(
      backgroundStyler({
        backgroundColor: THEME_COLOR.PRIMARY,
        backgroundShade: THEME_SHADE.DARK,
      }),
    ).toStrictEqual({ backgroundColor: themeCommonConfig?.colors?.primary?.dark });
  });

  test('works with light theme', async () => {
    expect(
      backgroundStyler({ backgroundColor: THEME_RELATIVE_COLOR.MAIN }, { theme: themeLightConfig }),
    ).toStrictEqual({
      backgroundColor: themeLightConfig.colors.background.main,
    });
    expect(
      backgroundStyler(
        { backgroundColor: THEME_RELATIVE_COLOR.MUTED },
        { theme: themeLightConfig },
      ),
    ).toStrictEqual({
      backgroundColor: themeLightConfig.colors.background.muted,
    });
    expect(
      backgroundStyler(
        { backgroundColor: THEME_RELATIVE_COLOR.CONTRAST },
        { theme: themeLightConfig },
      ),
    ).toStrictEqual({
      backgroundColor: themeLightConfig.colors.background.contrast,
    });
  });

  test('works with dark theme', async () => {
    expect(
      backgroundStyler({ backgroundColor: THEME_RELATIVE_COLOR.MAIN }, { theme: themeDarkConfig }),
    ).toStrictEqual({
      backgroundColor: themeDarkConfig.colors.background.main,
    });
    expect(
      backgroundStyler({ backgroundColor: THEME_RELATIVE_COLOR.MUTED }, { theme: themeDarkConfig }),
    ).toStrictEqual({
      backgroundColor: themeDarkConfig.colors.background.muted,
    });
    expect(
      backgroundStyler(
        { backgroundColor: THEME_RELATIVE_COLOR.CONTRAST },
        { theme: themeDarkConfig },
      ),
    ).toStrictEqual({
      backgroundColor: themeDarkConfig.colors.background.contrast,
    });
  });
});
