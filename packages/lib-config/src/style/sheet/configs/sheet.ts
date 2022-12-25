import type { SheetConfigParamsModel } from '@lib/config/style/sheet/sheet.models';
import { themeCommonConfig } from '@lib/config/style/theme/configs/theme.common';

export const sheetConfig: SheetConfigParamsModel = {
  fonts: {
    FontAwesome: 'url("react-native-vector-icons/dist/Fonts/FontAwesome.ttf") format("truetype")',
    Ionicons: 'url("react-native-vector-icons/dist/Fonts/Ionicons.ttf") format("truetype")',
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
      display: 'flex',
      flexDirection: 'column',
      fontFamily: themeCommonConfig.font?.family,
      fontSmooth: 'antialiased',
    },

    'html, body': {
      height: '100%',
      margin: 0,
      padding: 0,
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