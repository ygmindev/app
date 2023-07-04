import { type BaseStripeElementsOptions } from '@stripe/stripe-js';

import { type UseThemeModel } from '#lib-frontend/style/hooks/useTheme/useTheme.models';
import { THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';

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
        color: theme.color.palette.primary.main.base,
      },
    },
    theme: 'flat',
    variables: {
      borderRadius: `${theme.shape.borderRadius}px`,
      colorBackground: theme.color.palette.surface.muted,
      colorDanger: theme.color.palette.error.main.base,
      colorPrimary: theme.color.palette.primary.main.base,
      colorSuccess: theme.color.palette.success.main.base,
      colorText: theme.color.palette.surface.main.contrast,
      colorTextPlaceholder: theme.color.border,
      colorWarningText: theme.color.palette.warning.main.base,
      fontFamily: theme.font.fontFamily.main,
      fontSizeBase: `${theme.font.size[THEME_SIZE_MORE.MEDIUM]}px`,
    },
  },
});
