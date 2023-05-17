import { ConfigDynamicModel, ConfigStaticModel } from '@lib/config/core/core.models';
import type { PlatformModel } from '@lib/shared/platform/platform.models';
import type { RunWithConfigCallableParamsModel } from '@tool/task/core/utils/runWithConfig/runWithConfig.models';
import type { UserConfig } from 'vite';

export type BundleConfigModel = ConfigStaticModel<{
  aliases?: Record<string, string>;

  build: RunWithConfigCallableParamsModel<_BundleConfigModel>;

  define?: Record<string, string>;

  entry?: string;

  outDir?: string;

  envPrefix: Array<string>;

  extensions: Array<string>;

  externals?: Array<string>;

  mainFields?: Array<string>;

  modulePaths: Array<string>;

  platform: PlatformModel;

  provide?: Record<string, string>;

  watch?: Array<string>;
}>

export type _BundleConfigModel = ConfigDynamicModel<UserConfig>;
