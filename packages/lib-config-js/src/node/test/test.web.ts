import { bundleConfig } from '@lib/config/node/bundle/bundle.web';
import { testConfig as configBase } from '@lib/config/node/test/test.frontend';

let testConfig = configBase;

testConfig = testConfig.extend(() => ({
  bundle: bundleConfig.params(),
}));

export { testConfig };
