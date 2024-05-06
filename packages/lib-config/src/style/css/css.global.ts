import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';

import { type CssConfigModel } from '@lib/config/style/css/css.models';

export const AG_GRID_THEME = 'ag-theme-material';

import { defineConfig } from '@lib/config/core/utils/defineConfig/defineConfig';
import { ROOT } from '@lib/frontend/root/root.constants';

const { _config, config } = defineConfig({
  config: {
    stylesheet: (theme) => `
    @font-face {
      font-family: 'Ionicons';
      src: url(${Ionicons as string}) format("truetype");
    }
  
    @font-face {
      font-family: 'FontAwesome';
      src: url("${FontAwesome as string}") format("truetype");
    }
  
    @font-face {
      font-family: 'MaterialIcons';
      src: url("${MaterialIcons as string}") format("truetype");
    }
  
    html {
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0;
      padding: 0;
    }
  
    body {
      font-family: ${theme?.font.fontFamily.main};
      font-smoothing: antialiased;
    }
  
    body, #${ROOT} {
      display: flex;
      flex: 1;
      flex-direction: column;
    }
  
    a, a:visited {
      cursor: pointer;
      text-decoration-line: none;
    }
  
    [aria-disabled='true'] {
      cursor: initial !important;
    }
  
    input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0 !important;
    }
  
    input:-webkit-autofill {
      -webkit-background-clip: text;
    }
  
    input {
      border: none !important;
      outline: inherit !important;
      cursor: inherit !important;
    }
  
    img {
      background-repeat: no-repeat;
    }
  `,
  } satisfies CssConfigModel,
});

export { _config, config };
