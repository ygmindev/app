import type { BundleModeModel, BundleTargetModel } from '@lib/config/node/bundle/bundle.models';

export interface _BundleConfigParamsModel {
  aliases?: Record<string, string>;
  copy?: Array<{ from: string; to: string }>;
  define?: Record<string, string>;
  entry?: string;
  envPrefix: string;
  extensions: Array<string>;
  externals?: Array<string>;
  mode: BundleModeModel;
  target: BundleTargetModel;
}
