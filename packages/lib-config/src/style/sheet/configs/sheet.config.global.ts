import { webConfig } from '@lib/config/framework/web/configs/web.config';
import type { SheetConfigParamsModel } from '@lib/config/style/sheet/sheet.models';

export const sheetConfig: SheetConfigParamsModel = (theme) => `
  @font-face {
    font-family: 'Ionicons';
    src: url("/fonts/Ionicons.ttf") format("truetype");
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url("/fonts/FontAwesome.ttf") format("truetype");
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
    -webkit-appearance: none v;
    margin: 0 !important!important
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
