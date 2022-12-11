import { commonConfig } from '@lib/config/style/theme/configs/common';
import { Fragment } from 'react';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle =
  process.env.NODE_ENV === 'test' || import.meta.env.SSR
    ? Fragment
    : createGlobalStyle`

  @font-face {
    font-family: 'Ionicons';
    src: url('react-native-vector-icons/dist/Fonts/Ionicons.ttf') format('truetype');
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url('react-native-vector-icons/dist/Fonts/FontAwesome.ttf') format('truetype');
  }

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${commonConfig.font?.family};
    font-smoothing: antialiased;
    overflow-y: scroll;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  a, a:visited {
    cursor: pointer;
    text-decoration-line: none;
  }
  [aria-disabled='true'] {
    cursor: initial !important;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
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

  #react-refresh-overlay {
    display: none !important;
  }
`;
