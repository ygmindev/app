import { bundleConfig as configBase } from '@lib/config/node/bundle/bundle.base';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

let bundleConfig = configBase;

bundleConfig = bundleConfig.extend(() => ({
  aliases: [{ from: /^lodash\/([^.]+)$/, to: 'lodash/$1.js' }],

  envPrefix: ['SERVER_'],

  externals: [/node_modules/, '@eslint/js', 'globals', 'canvas'],

  platform: PLATFORM.NODE,

  transpilePatterns: [/graphql/],
}));

export { bundleConfig };
