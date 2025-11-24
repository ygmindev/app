import { bundleConfig as configBase } from '@lib/config/node/bundle/bundle.base';

let bundleConfig = configBase;

bundleConfig = bundleConfig.extend(() => ({
  aliases: [{ from: /^lodash\/([^.]+)$/, to: 'lodash/$1.js' }],

  envPrefix: ['SERVER_'],

  externals: [/node_modules/, '@eslint/js', 'globals', 'canvas'],

  transpileModules: ['type-graphql', 'graphql-scalars', 'reflect-metadata'],
}));

export { bundleConfig };
