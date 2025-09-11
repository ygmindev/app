import { type FileConfigModel } from '@lib/config/file/file.models';
import { type BUNDLE_FORMAT } from '@lib/config/node/bundle/bundle.constants';
import { type TypescriptConfigModel } from '@lib/config/node/typescript/typescript.models';
import { type BuildOptions } from 'esbuild';
import { type RollupOptions } from 'rollup';
import { type UserConfig } from 'vite';

export type BundleConfigModel = Pick<FileConfigModel, 'buildDir'> & {
  aliases?: Array<{ from: RegExp | string; to: string }>;

  assetsDir?: string;

  babel?: {
    plugins?: Array<string | [string, Record<string, unknown>]>;

    presets?: Array<string | [string, Record<string, unknown>]>;
  };

  configFilename: string;

  define?: Record<string, string>;

  entryFiles?: Record<string, string>;

  envFilename: string;

  envPrefix: Array<string>;

  exclude?: Array<string>;

  extensions: Array<string>;

  externals?: Array<string | RegExp>;

  format?: BundleFormatModel;

  include?: Array<string>;

  isPreserveModules?: boolean;

  isSourcemap?: boolean;

  isTranspileProject?: boolean;

  logSuppressPatterns?: Array<RegExp>;

  mainFields?: Array<string>;

  outputPathname?: string;

  packager: string;

  provide?: Record<string, string>;

  publicPathname?: string;

  rootDirs: Array<string>;

  serverExtension?: string;

  tempPathname?: string;

  transpileModules?: Array<string>;

  transpilePatterns?: Array<RegExp>;

  typescript: TypescriptConfigModel;

  watch?: Array<string>;
};

export type _BundleConfigModel = UserConfig & {
  esbuildConfig?: BuildOptions;

  rollupConfig?: RollupOptions;
};

export type BundleFormatModel = `${BUNDLE_FORMAT}`;
