import { type FileConfigModel } from '@lib/config/file/file.models';
import { type TypescriptConfigModel } from '@lib/config/node/typescript/typescript.models';
import { type UserConfig } from 'vite';

export type BundleConfigModel = Pick<FileConfigModel, 'buildDir' | 'publicDir'> & {
  aliases?: Array<{ from: RegExp | string; to: string }>;

  babel?: {
    plugins?: Array<string | [string, Record<string, unknown>]>;

    presets?: Array<string | [string, Record<string, unknown>]>;
  };

  configFilename: string;

  define?: Record<string, string>;

  entryPathname?: string;

  envPrefix: Array<string>;

  extensions: Array<string>;

  externals?: Array<string | RegExp>;

  logSuppressPatterns?: Array<RegExp>;

  mainFields?: Array<string>;

  packager: string;

  provide?: Record<string, string>;

  rootDirs: Array<string>;

  serverExtension?: string;

  transpiles?: Array<string>;

  typescript: TypescriptConfigModel;

  watch?: Array<string>;
};

export type _BundleConfigModel = UserConfig;
