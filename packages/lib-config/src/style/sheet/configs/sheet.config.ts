import { webConfig } from '@lib/config/framework/web/configs/web.config';
import type { SheetConfigParamsModel } from '@lib/config/style/sheet/sheet.models';
import { themeConfig } from '@lib/config/style/theme/configs/theme.config';

export const sheetConfig: SheetConfigParamsModel = {
  fonts: {
    FontAwesome: 'url("/fonts/FontAwesome.ttf") format("truetype")',
    Ionicons: 'url("/fonts/Ionicons.ttf") format("truetype")',
  },

  styles: {
    '[aria-disabled="true"]': {
      cursor: 'initial !important',
    },

    'a, a:visited': {
      cursor: 'pointer',
      textDecoration: 'none',
    },

    body: {
      fontFamily: themeConfig.font?.fontFamily.main,
      fontSmooth: 'antialiased',
    },

    html: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      margin: 0,
      padding: 0,
    },

    [`body, #${webConfig.rootId}`]: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },

    img: {
      backgroundRepeat: 'no-repeat',
    },

    input: {
      border: 'none !important',
      cursor: 'inherit !important',
      minWidth: '0 !important',
      outline: 'inherit !important',
    },

    'input:-webkit-autofill': {
      WebkitBackgroundClip: 'text',
    },

    'input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button':
      {
        WebkitAppearance: 'none',
        margin: '0 !important',
      },
  },
};
