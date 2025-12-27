import { bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { testConfig as configBase } from '@lib/config/node/test/test.base';

export const testConfig = configBase.extend(() => ({
  bundle: bundleConfig.params(),
}));
