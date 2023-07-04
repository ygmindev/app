import { type UserConfig } from 'vite';

import { type _BabelConfigModel } from '#lib-config/node/babel/babel.models';

export type BundleConfigModel = {
  aliases?: Record<string, string>;

  babelConfig?: _BabelConfigModel;

  define?: Record<string, string>;

  entry?: string;

  envPrefix: Array<string>;

  extensions: Array<string>;

  mainFields?: Array<string>;

  modulePaths: Array<string>;

  outDir?: string;

  provide?: Record<string, string>;

  transpiles?: Array<string>;

  tsconfigPath?: string;

  watch?: Array<string>;
};

export type _BundleConfigModel = UserConfig;
