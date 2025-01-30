import { type CssConfigModel } from '@lib/config/css/css.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';
import { ROOT } from '@lib/frontend/root/root.constants';
import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';

export const config = defineConfig<CssConfigModel>({
  params: () => ({
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
      font-family: 'MaterialCommunityIcons';
      src: url("${MaterialCommunityIcons as string}") format("truetype");
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
  }),
});

export default config;
