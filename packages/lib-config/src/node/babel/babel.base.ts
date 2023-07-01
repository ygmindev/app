import { _babel } from '#lib-config/node/babel/_babel';
import { type _BabelConfigModel, type BabelConfigModel } from '#lib-config/node/babel/babel.models';

export const config: BabelConfigModel = {
  plugins: [
    // '@babel/plugin-transform-runtime',
    // ['@babel/plugin-proposal-decorators', { legacy: true }],
    // ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
};

export const _config: _BabelConfigModel = ({ ...params } = {}) => _babel({ ...config, ...params });

// import { _babel } from '#lib-config/node/babel/_babel';
// import { type _BabelConfigModel, BabelConfigModel } from '#lib-config/node/babel/babel.models';

// export const config: BabelConfigModel = {
//   plugins: [
//     '@babel/plugin-transform-runtime',
//     ['@babel/plugin-proposal-decorators', { legacy: true }],
//     ['@babel/plugin-proposal-class-properties', { loose: true }],
//     ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
//     ['@babel/plugin-proposal-private-methods', { loose: true }],
//     ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
//   ],

//   presets: [['@babel/preset-env', { targets: { esmodules: true } }], '@babel/preset-typescript'],
// };

// export const _config: _BabelConfigModel = () => _babel(config);
