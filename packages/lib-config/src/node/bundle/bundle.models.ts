import type { ConfigDynamicModel } from '@lib/config/core/core.models';
import type { _BabelConfigModel } from '@lib/config/node/babel/babel.models';
import type { PlatformModel } from '@lib/platform/core/core.models';
import type { UserConfig } from 'vite';

export type BundleConfigModel = ConfigDynamicModel<{
  aliases?: Record<string, string>;

  babelConfig?: _BabelConfigModel;

  define?: Record<string, string>;

  entry?: string;

  envPrefix: Array<string>;

  extensions: Array<string>;

  externals?: Array<string>;

  mainFields?: Array<string>;

  modulePaths: Array<string>;

  outDir?: string;

  platform: PlatformModel;

  provide?: Record<string, string>;

  watch?: Array<string>;
}>;

export type _BundleConfigModel = ConfigDynamicModel<UserConfig>;