import { _testConfig } from '@lib/config/javascript/test/_test.config';
import type { TestConfigParamsModel } from '@lib/config/javascript/test/test.models';
import { info } from '@lib/shared/logging/utils/logger/logger';

const config: TestConfigParamsModel =
  require(`@lib/config/javascript/test/configs/test.config.${process.env.ENV_PLATFORM}`).testConfig;

info(`[test] coverage: ${config.coverageOutputPath}/index.html`);

export const testConfig = _testConfig(config);
