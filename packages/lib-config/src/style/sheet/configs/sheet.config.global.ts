import { webConfig } from '@lib/config/framework/web/configs/web.config';
import type { SheetConfigParamsModel } from '@lib/config/style/sheet/sheet.models';
import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import MaterialIcons from 'react-native-vector-icons/Fonts/MaterialIcons.ttf';

export const sheetConfig: SheetConfigParamsModel = (theme) => `
  @font-face {
    font-family: 'Ionicons';
    src: url(${Ionicons}) format("truetype");
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url("${FontAwesome}") format("truetype");
  }

  @font-face {
    font-family: 'MaterialIcons';
    src: url("${MaterialIcons}") format("truetype");
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

  body, #${webConfig.rootId} {
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
    min-width: 0 !important;
    border: none !important;
    outline: inherit !important;
    cursor: inherit !important;
  }

  img {
    background-repeat: no-repeat;
  }
`;
