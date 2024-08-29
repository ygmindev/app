import { type UseThemeModel } from '@lib/frontend/style/hooks/useTheme/useTheme.models';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE,
} from '@lib/frontend/style/style.constants';
import { type BaseStripeElementsOptions } from '@stripe/stripe-js';

export const STRIPE_ELEMENTS_STYLE: (theme: UseThemeModel) => BaseStripeElementsOptions = (
  theme,
) => ({
  appearance: {
    labels: 'floating',
    rules: {
      '.Input, .Block, .PickerItem	': {
        backgroundColor: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN],
        border: `1px solid ${theme.color.border}`,
        paddingBottom: `${theme.shape.spacing[THEME_SIZE.SMALL]}px`,
        paddingLeft: `${theme.shape.spacing[THEME_SIZE.MEDIUM]}px`,
        paddingRight: `${theme.shape.spacing[THEME_SIZE.MEDIUM]}px`,
        paddingTop: `${theme.shape.spacing[THEME_SIZE.SMALL]}px`,
      },
      '.Label--floating': {
        color: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
      },
      '.Label--resting': {
        color: theme.color.border,
      },
      '.Tab': {
        backgroundColor: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN],
        border: `1px solid ${theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN]}`,
        borderColor: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
        color: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
      },
      '.Tab--selected': {
        backgroundColor: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
        color: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN],
      },
      '.Tab--selected:hover': {
        backgroundColor: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.ACTIVE],
        border: `1px solid ${theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.ACTIVE]}`,
        color: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN],
      },
      '.Tab:hover': {
        backgroundColor: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MUTED],
        color: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
      },
      '.TabIcon, .TabIcon:hover': {
        fill: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
      },
      '.TabIcon--selected, .TabIcon--selected:hover': {
        fill: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN],
      },
    },
    theme: 'flat',
    variables: {
      borderRadius: `${theme.shape.borderRadius[THEME_SIZE.MEDIUM]}px`,
      colorBackground: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MUTED],
      colorDanger: theme.color.palette[THEME_COLOR.ERROR][THEME_ROLE.MAIN],
      colorPrimary: theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN],
      colorSuccess: theme.color.palette[THEME_COLOR.SUCCESS][THEME_ROLE.MAIN],
      colorText: theme.color.palette[THEME_COLOR_MORE.SURFACE].contrast,
      colorTextPlaceholder: theme.color.border,
      colorWarningText: theme.color.palette[THEME_COLOR.WARNING][THEME_ROLE.MAIN],
      fontFamily: theme.font.fontFamily[THEME_ROLE.MAIN],
      fontSizeBase: `${theme.font.size[THEME_SIZE.MEDIUM]}px`,
      gridColumnSpacing: `${theme.shape.spacing[THEME_SIZE.SMALL]}px`,
      gridRowSpacing: `${theme.shape.spacing[THEME_SIZE.SMALL]}px`,
      spacingUnit: '0px',
      tabSpacing: `${theme.shape.spacing[THEME_SIZE.SMALL]}px`,
    },
  },
});
