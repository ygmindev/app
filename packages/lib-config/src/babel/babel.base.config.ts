import type { TransformOptions } from '@babel/core';

export const babelConfig: TransformOptions = {
  compact: process.env.NODE_ENV === 'production',

  minified: process.env.NODE_ENV === 'production',

  plugins: [
    '@babel/plugin-transform-runtime',
    ['@babel/plugin-proposal-decorators', { version: 'legacy' }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['@babel/plugin-proposal-private-methods', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
  ],

  presets: ['@babel/preset-env', '@babel/preset-typescript'],

  sourceMaps: process.env.NODE_ENV !== 'production',
};
