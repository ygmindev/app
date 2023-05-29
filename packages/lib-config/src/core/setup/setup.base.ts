import type { SetupConfigModel } from '@lib/config/core/setup/setup.models';

const _isInitialized = false;

const _isTerminated = false;

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
