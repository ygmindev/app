import type { BundleModeModel } from '@lib/config/javascript/bundle/bundle.models';
import type { PlatformModel } from '@lib/shared/platform/platform.models';

export interface _BundleConfigParamsModel {
  aliases?: Record<string, string>;
  copy?: Array<{ from: string; to: string }>;
  define?: Record<string, unknown>;
  entry?: string;
  envPrefix: Array<string>;
  extensions: Array<string>;
  externals?: Array<string>;
  mode: BundleModeModel;
  modulePaths: Array<string>;
  platform: PlatformModel;
}
