import type { BabelConfigModel } from '@lib/config/node/babel/_babel.models';

const babelConfig: BabelConfigModel = {
  plugins: [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
  ],

  presets: [['@babel/preset-env', { targets: { esmodules: true } }], '@babel/preset-typescript'],
};

export default babelConfig;
