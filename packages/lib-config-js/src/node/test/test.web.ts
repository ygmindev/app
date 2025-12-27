import { bundleConfig } from '@lib/config/node/bundle/bundle.web';
import { testConfig as configBase } from '@lib/config/node/test/test.frontend';

export const testConfig = configBase.extend(() => ({
  bundle: bundleConfig.params(),
}));
