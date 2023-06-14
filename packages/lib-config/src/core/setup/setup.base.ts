import type { SetupConfigModel } from '#lib-config/core/setup/setup.models';

const isInitialized = false;

const isTerminated = false;

export const config: SetupConfigModel = {
  onInitialize: async () => {
    if (!isInitialized) {
      return;
    }
  },

  onTerminate: async () => {
    if (!isTerminated) {
      return;
    }
  },
};
