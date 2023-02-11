import type { BundleModeModel } from '@lib/config/javascript/bundle/bundle.models';
import type { PlatformModel } from '@lib/shared/platform/platform.models';
import type { BabelOptions } from '@vitejs/plugin-react';

export interface _BundleConfigParamsModel {
  aliases?: Record<string, string>;
  babelConfig?: BabelOptions;
  define?: Record<string, unknown>;
  entry?: string;
  envPrefix: Array<string>;
  extensions: Array<string>;
  externals?: Array<string>;
  mode: BundleModeModel;
  modulePaths: Array<string>;
  platform: PlatformModel;
  provide?: Record<string, string>;
  watch?: Array<string>;
}
