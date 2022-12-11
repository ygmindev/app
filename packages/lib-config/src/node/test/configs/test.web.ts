import { testConfig as testConfigFrontend } from '@lib/config/node/test/configs/test.frontend';
import type { TestConfigParamsModel } from '@lib/config/node/test/test.models';
import { cleanup } from '@lib/frontend/setup/utils/cleanup/cleanup';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { MERGE_STRATEGY } from '@lib/shared/core/utils/merge/merge.constants';
import { EXTENSIONS_WEB } from '@lib/shared/file/file.constants';

export const testConfig: TestConfigParamsModel = merge({
  strategy: MERGE_STRATEGY.DEEP_PREPEND,

  values: [
    {
      cleanup: async () => {
        await cleanup();
      },

      initialize: {
        onLoad: () => {
          window.open = jest.fn();
          window.addEventListener = jest.fn();
          window.removeEventListener = jest.fn();
        },
      },

      resolveExtensions: EXTENSIONS_WEB,
    },

    testConfigFrontend,
  ],
});
