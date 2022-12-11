import { commonConfig } from '@lib/config/style/theme/configs/common';
import { darkConfig } from '@lib/config/style/theme/configs/dark';
import { lightConfig } from '@lib/config/style/theme/configs/light';
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
      backgroundColor: commonConfig?.colors?.primary?.main,
    });
    expect(
      backgroundStyler({
        backgroundColor: THEME_COLOR.PRIMARY,
        backgroundShade: THEME_SHADE.LIGHT,
      }),
    ).toStrictEqual({ backgroundColor: commonConfig?.colors?.primary?.light });
    expect(
      backgroundStyler({
        backgroundColor: THEME_COLOR.PRIMARY,
        backgroundShade: THEME_SHADE.DARK,
      }),
    ).toStrictEqual({ backgroundColor: commonConfig?.colors?.primary?.dark });
  });

  test('works with light theme', async () => {
    expect(
      backgroundStyler({ backgroundColor: THEME_RELATIVE_COLOR.MAIN }, { theme: lightConfig }),
    ).toStrictEqual({
      backgroundColor: lightConfig.colors.background.main,
    });
    expect(
      backgroundStyler(
        { backgroundColor: THEME_RELATIVE_COLOR.MUTED },
        { theme: lightConfig },
      ),
    ).toStrictEqual({
      backgroundColor: lightConfig.colors.background.muted,
    });
    expect(
      backgroundStyler(
        { backgroundColor: THEME_RELATIVE_COLOR.CONTRAST },
        { theme: lightConfig },
      ),
    ).toStrictEqual({
      backgroundColor: lightConfig.colors.background.contrast,
    });
  });

  test('works with dark theme', async () => {
    expect(
      backgroundStyler({ backgroundColor: THEME_RELATIVE_COLOR.MAIN }, { theme: darkConfig }),
    ).toStrictEqual({
      backgroundColor: darkConfig.colors.background.main,
    });
    expect(
      backgroundStyler({ backgroundColor: THEME_RELATIVE_COLOR.MUTED }, { theme: darkConfig }),
    ).toStrictEqual({
      backgroundColor: darkConfig.colors.background.muted,
    });
    expect(
      backgroundStyler(
        { backgroundColor: THEME_RELATIVE_COLOR.CONTRAST },
        { theme: darkConfig },
      ),
    ).toStrictEqual({
      backgroundColor: darkConfig.colors.background.contrast,
    });
  });
});
