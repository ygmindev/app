import type { BundleModeModel } from '@lib/config/node/bundle/bundle.models';

export interface _BundleConfigParamsModel {
  aliases?: Record<string, string>;
  define?: Record<string, string>;
  entry?: string;
  envPrefix: string;
  extensions: Array<string>;
  externals?: Array<string>;
  mode: BundleModeModel;
}
