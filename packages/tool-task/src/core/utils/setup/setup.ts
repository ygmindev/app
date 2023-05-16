import type { _SetupConfigModel } from '@lib/config/core/setup/_setup.models';
import { importFromEnv } from '@lib/shared/core/utils/importFromEnv/importFromEnv';
import type { SetupModel } from '@tool/task/core/utils/setup/setup.models';

let _isInitialized = false;

let _isTerminated = false;

export const setup: SetupModel = {
  initialize: async () => {
    if (!_isInitialized) {
      const setupConfig = await importFromEnv<_SetupConfigModel>(
        '@lib/config/core/setup/configs/setup.config',
      );
      await setupConfig.onInitialize();
      _isInitialized = true;
    }
  },

  isInitialized: _isInitialized,

  isTerminated: _isTerminated,

  terminate: async () => {
    if (!_isTerminated) {
      const setupConfig = await importFromEnv<_SetupConfigModel>(
        '@lib/config/core/setup/configs/setup.config',
      );
      await setupConfig.onTerminate();
      _isTerminated = true;
    }
  },
};
