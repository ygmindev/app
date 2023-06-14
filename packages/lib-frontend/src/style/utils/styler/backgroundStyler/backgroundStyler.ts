import { THEME_ROLE } from '#lib-frontend/style/style.constants';
import type { ThemeColorModel } from '#lib-frontend/style/style.models';
import type { BackgroundStylerParamsModel } from '#lib-frontend/style/utils/styler/backgroundStyler/backgroundStyler.models';
import type { StylerModel } from '#lib-frontend/style/utils/styler/styler.models';
import { cleanObject } from '#lib-shared/core/utils/cleanObject/cleanObject';

export const backgroundStyler: StylerModel<BackgroundStylerParamsModel> = (
  { backgroundColor, backgroundRole = THEME_ROLE.MAIN },
  theme,
) => {
  const color = theme.colors.tone[backgroundColor as ThemeColorModel];
  return cleanObject({ backgroundColor: color ? color[backgroundRole] : backgroundColor });
};
