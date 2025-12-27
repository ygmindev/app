import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { BUILD_DIR, CACHE_DIR } from '@lib/config/file/file.constants';
import { bundleConfig } from '@lib/config/node/bundle/bundle';
import { _test } from '@lib/config/node/test/_test';
import { type _TestConfigModel, type TestConfigModel } from '@lib/config/node/test/test.models';
import { typescriptConfig } from '@lib/config/node/typescript/typescript';
import { Config } from '@lib/config/utils/Config/Config';

export const testConfig = new Config<TestConfigModel, _TestConfigModel>({
  config: _test,

  params: () => ({
    buildDir: BUILD_DIR,

    bundle: bundleConfig.params(),

    cacheDir: CACHE_DIR,

    delay: 500,

    eteExtension: '.ete',

    fileExtensions: ['.gif', '.jpeg', '.jpg', '.otf', '.png', '.svg', '.ttf', '.woff', '.woff2'],

    mockPath: fromConfig('node/test/__mocks__'),

    outDir: 'test',

    specExtension: '.spec',

    timeout: 120e3,

    typescript: typescriptConfig.params(),
  }),
});
