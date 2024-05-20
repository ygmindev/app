import { _babel } from '@lib/config/node/babel/_babel';
import { type BabelConfigModel } from '@lib/config/node/babel/babel.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _babel,

  config: {
    plugins: [
      '@babel/plugin-transform-runtime',
      ['@babel/plugin-transform-private-methods', { loose: true }],
      '@babel/plugin-transform-class-static-block',
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    ],

    presets: [['@babel/preset-env', { loose: true, targets: { node: 'current' } }]],
  } satisfies BabelConfigModel,
});

export { _config, config };

//   plugins: [
//     '@babel/plugin-transform-runtime',
//     ['@babel/plugin-proposal-decorators', { legacy: true }],
//     ['@babel/plugin-proposal-class-properties', { loose: true }],
//     ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
//     ['@babel/plugin-proposal-private-methods', { loose: true }],
//     ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
//   ],

//   presets: [['@babel/preset-env', { targets: { esmodules: true } }], '@babel/preset-typescript'],
