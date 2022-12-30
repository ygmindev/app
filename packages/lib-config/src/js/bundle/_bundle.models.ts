import type { BundleModeModel } from '@lib/config/js/bundle/bundle.models';
import type { PlatformModel } from '@lib/shared/platform/platform.models';

export interface _BundleConfigParamsModel {
  aliases?: Record<string, string>;
  copy?: Array<{ from: string; to: string }>;
  define?: Record<string, unknown>;
  entry?: string;
  envPrefix: string;
  extensions: Array<string>;
  externals?: Array<string>;
  mode: BundleModeModel;
  platform: PlatformModel;
}
