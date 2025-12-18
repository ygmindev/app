import { type FileConfigModel } from '@lib/config/file/file.models';
import {
  type APP_TYPE,
  type BUNDLE_FORMAT,
  type BUNDLE_SOURCEMAP,
} from '@lib/config/node/bundle/bundle.constants';
import { type ServerConfigModel } from '@lib/config/node/server/server.models';
import { type TypescriptConfigModel } from '@lib/config/node/typescript/typescript.models';
import { type PLATFORM } from '@lib/shared/platform/platform.constants';
import { type NodeBuildParamsModel } from '@tool/task/node/tasks/nodeBuild/nodeBuild.models';
import { type BuildOptions } from 'esbuild';
import { type RollupOptions } from 'rollup';
import { type UserConfig } from 'vite';

export type BundleConfigModel = Pick<FileConfigModel, 'buildDir'> & {
  aliases?: Array<{ from: RegExp | string; to: string }>;

  appType?: APP_TYPE;

  assetsDir?: string;

  babel?: {
    plugins?: Array<string | [string, Record<string, unknown>]>;

    presets?: Array<string | [string, Record<string, unknown>]>;
  };

  commonjsDeps?: Array<string>;

  configFilename: string;

  dedupe?: Array<string>;

  define?: Record<string, string>;

  entryFiles?: string | Array<string> | Record<string, string>;

  envFilename: string;

  envPrefix: Array<string>;

  exclude?: Array<string>;

  extensions?: Array<string>;

  externals?: Array<string | RegExp>;

  format?: BUNDLE_FORMAT;

  include?: Array<string>;

  isPreserveModules?: boolean;

  isTranspileProject?: boolean;

  logSuppressPatterns?: Array<RegExp>;

  mainFields?: Array<string>;

  outDir?: string;

  outExtension?: string;

  packager: string;

  platform?: PLATFORM;

  preBundle?: Array<[globs: Array<string>, config?: NodeBuildParamsModel]>;

  provide?: Record<string, string>;

  publicPathname?: string;

  rootDirs: Array<string>;

  server?: {
    certificate?: ServerConfigModel['certificate'];
  };

  serverExtension?: string;

  sourcemap?: BUNDLE_SOURCEMAP;

  tempPathname?: string;

  transpileModules?: Array<string>;

  transpilePatterns?: Array<RegExp>;

  typescript: TypescriptConfigModel;

  watch?: Array<string | RegExp>;
};

export type _BundleConfigModel = UserConfig & {
  esbuildConfig?: BuildOptions;

  rollupConfig?: RollupOptions;
};
