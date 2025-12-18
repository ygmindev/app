import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { bundleConfig as configBase } from '@lib/config/node/bundle/bundle.base';
import { PLATFORM } from '@lib/shared/platform/platform.constants';

let bundleConfig = configBase;

bundleConfig = bundleConfig.extend(() => ({
  envPrefix: ['SERVER_'],

  externals: [/node_modules/, '@eslint/js', 'globals', 'canvas'],

  platform: PLATFORM.NODE,

  preBundle: [[fromGlobs([fromPackages('*/src/**/*.transport.ts')]), {}]],

  transpilePatterns: [/graphql/],
}));

export { bundleConfig };
