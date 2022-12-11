import { cleanup } from '@lib/backend/setup/utils/cleanup/cleanup';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { testConfig as testConfigBase } from '@lib/config/node/test/configs/test.base';
import type { TestConfigParamsModel } from '@lib/config/node/test/test.models';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { EXTENSIONS_BACKEND } from '@lib/shared/file/file.constants';

export const testConfig: TestConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      cleanup: async () => {
        await cleanup();
      },

      initialize: {
        onBeforeAll: async () => {
          await initialize();
        },
      },

      resolveExtensions: EXTENSIONS_BACKEND,
    },

    testConfigBase,
  ],
});
