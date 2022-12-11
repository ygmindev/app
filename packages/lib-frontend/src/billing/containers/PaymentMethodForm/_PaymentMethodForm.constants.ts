import type { ThemeConfigModel } from '@lib/config/style/theme/theme.models';
import type { StripeElementsOptions } from '@stripe/stripe-js';

export const STRIPE_ELEMENTS_STYLE: (theme: ThemeConfigModel) => StripeElementsOptions = (
  theme,
) => ({
  appearance: {
    labels: 'floating',
    rules: {
      '.Input, .Block': {
        backgroundColor: 'transparent',
        border: `1px solid ${theme.colors.border}`,
      },
    },
    theme: 'flat',
    variables: {
      borderRadius: `${theme.shape.borderRadius}px`,
      colorBackground: theme.colors.background.main,
      colorDanger: theme.colors.error.main,
      colorPrimary: theme.colors.primary.main,
      colorSuccess: theme.colors.success.main,
      colorText: theme.colors.text.main,
      colorTextPlaceholder: theme.colors.border,
      colorWarningText: theme.colors.warning.main,
      fontFamily: theme.font.family,
      fontSizeBase: `${theme.font.size.m}px`,
    },
  },
});
