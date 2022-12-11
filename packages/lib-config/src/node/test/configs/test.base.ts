import { fromConfig } from '@lib/backend/file/utils/fromConfig/fromConfig';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import type { TestConfigParamsModel } from '@lib/config/node/test/test.models';
import { EXTENSIONS_JS, EXTENSIONS_TEST } from '@lib/shared/file/file.constants';
import { cleanup } from '@lib/shared/setup/utils/cleanup/cleanup';
import { initialize } from '@lib/shared/setup/utils/initialize/initialize';

export const testConfig: TestConfigParamsModel = {
  cachePath: fromWorking('.cache/test'),

  cleanup: async () => {
    await cleanup();
  },

  coverageOutputPath: fromWorking('coverage'),

  extensions: EXTENSIONS_TEST,

  initialize: {
    mocks: {
      '@lib/backend/file/utils/fromRoot/fromRoot': () => ({ fromRoot: () => '/' }),
      '@lib/backend/file/utils/fromWorking/fromWorking': () => ({ fromWorking: () => '/' }),
    },

    onBeforeAll: async () => {
      await initialize();
    },
  },

  mockPath: fromConfig('test/configs/__mocks__'),

  resolveExtensions: EXTENSIONS_JS,

  root: fromWorking(),

  timeout: 30e3,
};
