import { type UserConfig } from 'vite';

import { type FileConfigModel } from '@lib-config/core/file/file.models';
import { type _BabelConfigModel } from '@lib-config/node/babel/babel.models';

export type BundleConfigModel = Pick<
  FileConfigModel,
  'buildPath' | 'cachePath' | 'distPath' | 'publicPath'
> & {
  aliases?: Array<{ from: RegExp | string; to: string }>;

  babelConfig?: _BabelConfigModel;

  define?: Record<string, string>;

  entry?: string;

  envPrefix: Array<string>;

  extensions: Array<string>;

  externals?: Array<string>;

  logSuppressPatterns?: Array<RegExp>;

  mainFields?: Array<string>;

  modulePaths: Array<string>;

  packager: string;

  provide?: Record<string, string>;

  serverExtension?: string;

  transpiles?: Array<string>;

  tsconfigPath?: string;

  watch?: Array<string>;
};

export type _BundleConfigModel = UserConfig;
