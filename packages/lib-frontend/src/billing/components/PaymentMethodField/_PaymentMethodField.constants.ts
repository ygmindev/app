import { type BaseStripeElementsOptions } from '@stripe/stripe-js';

import { type UseThemeModel } from '#lib-frontend/style/hooks/useTheme/useTheme.models';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';

export const STRIPE_ELEMENTS_STYLE: (theme: UseThemeModel) => BaseStripeElementsOptions = (
  theme,
) => ({
  appearance: {
    labels: 'floating',
    rules: {
      '.Input, .Block': {
        backgroundColor: 'transparent',
        border: `1px solid ${theme.color.border}`,
      },
      '.Label--floating': {
        color: theme.color.palette.primary.main,
      },
    },
    theme: 'flat',
    variables: {
      borderRadius: `${theme.shape.borderRadius[THEME_SIZE.MEDIUM]}px`,
      colorBackground: theme.color.palette.surface.muted,
      colorDanger: theme.color.palette.error.main,
      colorPrimary: theme.color.palette.primary.main,
      colorSuccess: theme.color.palette.success.main,
      colorText: theme.color.palette.surface.contrast,
      colorTextPlaceholder: theme.color.border,
      colorWarningText: theme.color.palette.warning.main,
      fontFamily: theme.font.fontFamily.main,
      fontSizeBase: `${theme.font.size[THEME_SIZE.MEDIUM]}px`,
    },
  },
});
