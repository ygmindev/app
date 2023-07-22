import { toMatchImageSnapshot } from 'jest-image-snapshot';

import { fromConfig } from '#lib-backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
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

      cachePath: fromWorking('.cache/test'),

      delay: 500,

      dimension: { height: 800, width: 1280 },

      eteExtensions: ['.ete'],

      fileExtensions: ['gif', 'jpeg', 'jpg', 'otf', 'png', 'svg', 'ttf', 'woff', 'woff2'],

      imageExtension: 'png',

      isBrowser: false,

      mockPath: fromConfig('node/test/params/__mocks__'),

      onBeforeAll: async () => {
        expect.extend({ toMatchImageSnapshot });
      },

      outputPath: fromWorking(fileConfig.distDir),

      specExtensions: ['.spec'],

      timeout: 90e3,
    } satisfies TestConfigModel),
});

export { _config, config };
