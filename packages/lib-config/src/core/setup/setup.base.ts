import type { SetupConfigModel } from '@lib/config/core/setup/setup.models';

let _isInitialized = false;

let _isTerminated = false;

export const config: SetupConfigModel = {
  onInitialize: async () => {
    if (!_isInitialized) {
      return;
    }
  },

  onTerminate: async () => {
    if (!_isTerminated) {
      return;
    }
  },
};
