import { THEME_ROLE } from '@lib/frontend/style/style.constants';
import { type ThemeColorModel } from '@lib/frontend/style/style.models';
import { type BackgroundStylerParamsModel } from '@lib/frontend/style/utils/styler/backgroundStyler/backgroundStyler.models';
import { type StylerModel } from '@lib/frontend/style/utils/styler/styler.models';

export const backgroundStyler: StylerModel<BackgroundStylerParamsModel> = (
  { backgroundColor, backgroundRole = THEME_ROLE.MAIN, isTransparent },
  theme,
) => {
  const colorF = theme.color.palette[backgroundColor as ThemeColorModel];
  return {
    backgroundColor: isTransparent
      ? 'transparent'
      : colorF
        ? colorF[backgroundRole]
        : backgroundColor,
  };
};
