import type { _SetupConfigModel } from '@lib/config/core/setup/_setup.models';
import type { SetupModel } from '@tool/task/core/utils/setup/setup.models';
import _setupConfig from '@lib/config/core/setup/_setup';

let _isInitialized = false;

let _isTerminated = false;

export const setup: SetupModel = {
  initialize: async () => {
    if (!_isInitialized) {
      const setupConfig = await _setupConfig();
      await setupConfig.onInitialize();
      _isInitialized = true;
    }
  },

  isInitialized: _isInitialized,

  isTerminated: _isTerminated,

  terminate: async () => {
    if (!_isTerminated) {
      const setupConfig = await _setupConfig();
      await setupConfig.onTerminate();
      _isTerminated = true;
    }
  },
};
