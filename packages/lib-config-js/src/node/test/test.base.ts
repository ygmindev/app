import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { BUILD_DIR, CACHE_DIR } from '@lib/config/file/file.constants';
import { config as bundleConfig } from '@lib/config/node/bundle/bundle.base';
import { _test } from '@lib/config/node/test/_test';
import { type _TestConfigModel, type TestConfigModel } from '@lib/config/node/test/test.models';
import typescriptConfig from '@lib/config/node/typescript/typescript';
import { defineConfig } from '@lib/config/utils/defineConfig/defineConfig';

export const config = defineConfig<TestConfigModel, _TestConfigModel>({
  config: _test,

  params: () => ({
    buildDir: BUILD_DIR,

    bundle: bundleConfig.params(),

    cacheDir: CACHE_DIR,

    delay: 500,

    eteExtension: '.ete',

    fileExtensions: ['.gif', '.jpeg', '.jpg', '.otf', '.png', '.svg', '.ttf', '.woff', '.woff2'],

    mockPath: fromConfig('node/test/__mocks__'),

    outputDir: 'test',

    specExtension: '.spec',

    timeout: 120e3,

    typescript: typescriptConfig.params(),
  }),
});

export default config;
