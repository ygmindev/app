import { toMatchImageSnapshot } from 'jest-image-snapshot';

import { fromConfig } from '#lib-backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '#lib-backend/file/utils/fromWorking/fromWorking';
import { defineConfig } from '#lib-config/core/utils/defineConfig/defineConfig';
import { config as bundleConfig } from '#lib-config/node/bundle/bundle.base';
import { _test } from '#lib-config/node/test/_test';
import { type TestConfigModel } from '#lib-config/node/test/test.models';
import { extensions } from '#lib-platform/core/utils/extensions/extensions';
import { permuteString } from '#lib-shared/core/utils/permuteString/permuteString';

const { _config, config } = defineConfig({
  _config: _test,

  config: () =>
    ({
      bundleConfig,

      cachePath: fromWorking('.cache/test'),

      dimension: { height: 800, width: 1280 },

      fileExtensions: ['gif', 'jpeg', 'jpg', 'otf', 'png', 'svg', 'ttf', 'woff', 'woff2'],

      imageExtension: 'png',

      mockPath: fromConfig('node/test/params/__mocks__'),

      onBeforeAll: async () => {
        expect.extend({ toMatchImageSnapshot });
      },

      outputPath: fromWorking('dist'),

      testExtensions: permuteString(['.e2e', '.spec'], extensions()),

      timeout: 60e3,
    } satisfies TestConfigModel),
});

export { _config, config };
