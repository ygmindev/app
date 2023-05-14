import type { _BabelConfigParamsModel } from '@lib/config/node/babel/_babel.models';

export const babelParamsConfig: _BabelConfigParamsModel = {
  plugins: [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
  ],

  presets: ['@babel/preset-env', '@babel/preset-typescript'],
};
