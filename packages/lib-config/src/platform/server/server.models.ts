import { type BundleConfigModel } from '@lib/config/node/bundle/bundle.models';

export type ServerConfigModel = {
  bundleConfig(): BundleConfigModel;

  configFile: string;
};

// export type _ServerConfigModel = Config;
