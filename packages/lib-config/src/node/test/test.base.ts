import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as fileConfig } from '@lib/config/file/file';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.base';
import { _test } from '@lib/config/node/test/_test';
import { TEST_CONFIG } from '@lib/config/node/test/test.constants';
import { type TestConfigModel } from '@lib/config/node/test/test.models';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

const { _config, config } = defineConfig({
  _config: _test,

  config: () =>
    ({
      ...TEST_CONFIG,

      bundleConfig,

      cachePath: joinPaths([fileConfig.cachePath, 'test']),

      mockDir: fromConfig('node/test/__mocks__'),

      outputPath: joinPaths([fileConfig.buildPath, 'test']),
    }) satisfies TestConfigModel,
});

export { _config, config };
