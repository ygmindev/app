import type { BaseStripeElementsOptions } from '@stripe/stripe-js';

import type { UseThemeModel } from '#lib-frontend/style/hooks/useTheme/useTheme.models';
import { THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';

export const STRIPE_ELEMENTS_STYLE: (theme: UseThemeModel) => BaseStripeElementsOptions = (
  theme,
) => ({
  appearance: {
    labels: 'floating',
    rules: {
      '.Input, .Block': {
        backgroundColor: 'transparent',
        border: `1px solid ${theme.colors.tone.neutral.muted}`,
      },
      '.Label--floating': {
        color: theme.colors.tone.primary.main,
      },
    },
    theme: 'flat',
    variables: {
      borderRadius: `${theme.shape.borderRadius}px`,
      colorBackground: theme.colors.tone.neutral.main,
      colorDanger: theme.colors.tone.error.main,
      colorPrimary: theme.colors.tone.primary.main,
      colorSuccess: theme.colors.tone.success.main,
      colorText: theme.colors.tone.neutral.mainContrast,
      colorTextPlaceholder: theme.colors.tone.neutral.muted,
      colorWarningText: theme.colors.tone.warning.main,
      fontFamily: theme.font.fontFamily.main,
      fontSizeBase: `${theme.font.size[THEME_SIZE_MORE.MEDIUM]}px`,
    },
  },
});
