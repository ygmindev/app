import { fromConfig } from '#lib-backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '#lib-backend/file/utils/joinPaths/joinPaths';
import { config as fileConfig } from '#lib-config/core/file/file';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { config as bundleConfig } from '#lib-config/node/bundle/bundle.base';
import { _test } from '#lib-config/node/test/_test';
import { type TestConfigModel } from '#lib-config/node/test/test.models';

const { _config, config } = defineConfig({
  _config: _test,

  config: () =>
    ({
      bundleConfig,

      cachePath: fromWorking(fileConfig.cachePath, 'test'),

      delay: 500,

      dimension: { height: 800, width: 1280 },

      eteExtensions: ['.ete'],

      fileExtensions: ['gif', 'jpeg', 'jpg', 'otf', 'png', 'svg', 'ttf', 'woff', 'woff2'],

      isBrowser: true,

      mockDir: fromConfig('node/test/__mocks__'),

      outputPath: joinPaths([fileConfig.buildPath, 'test']),

      snapshotPath: 'snapshots',

      snapshotPrefix: 'snapshot',

      specExtensions: ['.spec'],

      timeout: 120e3,
    }) satisfies TestConfigModel,
});

export { _config, config };
