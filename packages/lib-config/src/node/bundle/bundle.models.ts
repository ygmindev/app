import { type FileConfigModel } from '@lib/config/core/file/file.models';
import { type _BabelConfigModel } from '@lib/config/node/babel/babel.models';
import { type UserConfig } from 'vite';

export type BundleConfigModel = Pick<
  FileConfigModel,
  'buildPath' | 'cachePath' | 'distPath' | 'publicPath'
> & {
  aliases?: Array<{ from: RegExp | string; to: string }>;

  babelConfig?: _BabelConfigModel;

  configFile: string;

  define?: Record<string, string>;

  entry?: string;

  envPrefix: Array<string>;

  extensions: Array<string>;

  externals?: Array<string>;

  logSuppressPatterns?: Array<RegExp>;

  mainFields?: Array<string>;

  packager: string;

  provide?: Record<string, string>;

  rootDirs: Array<string>;

  serverExtension?: string;

  transpiles?: Array<string>;

  tsconfigPath?: string;

  watch?: Array<string>;
};

export type _BundleConfigModel = UserConfig;
