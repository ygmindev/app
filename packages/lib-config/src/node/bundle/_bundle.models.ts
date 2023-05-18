import type { ConfigDynamicModel, ConfigStaticModel } from '@lib/config/core/core.models';
import type { PlatformModel } from '@lib/shared/platform/platform.models';
import type { UserConfig } from 'vite';

export type BundleConfigModel = ConfigStaticModel<{
  aliases?: Record<string, string>;

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
