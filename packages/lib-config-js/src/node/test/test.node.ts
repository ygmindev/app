import { bundleConfig } from '@lib/config/node/bundle/bundle.node';
import { testConfig as configBase } from '@lib/config/node/test/test.base';

let testConfig = configBase;

testConfig = testConfig.extend(() => ({
  bundle: bundleConfig.params(),
}));

export { testConfig };
