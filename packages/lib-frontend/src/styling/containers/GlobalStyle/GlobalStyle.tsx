import { commonThemeConfig } from '@lib/config/theme/common.config';
import { Fragment } from 'react';
import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import Ionicons from 'react-native-vector-icons/Fonts/Ionicons.ttf';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle =
  process.env.NODE_ENV === 'test' || __IS_SSR__
    ? Fragment
    : createGlobalStyle`
  @font-face {
    font-family: 'Ionicons';
    src: url(${Ionicons});
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url(${FontAwesome});
  }

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${commonThemeConfig.font?.family};
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
