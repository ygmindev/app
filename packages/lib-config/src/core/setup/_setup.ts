import closeWithGrace from 'close-with-grace';

import { type _SetupConfigModel, type SetupConfigModel } from '#lib-config/core/setup/setup.models';

let isInitialized = false;

let isTerminated = false;

export const _setup = ({ onInitialize, onTerminate }: SetupConfigModel): _SetupConfigModel => ({
  setup: async () => {
    if (!isInitialized) {
      onInitialize && (await onInitialize());
      isInitialized = true;
    }
    closeWithGrace(async (_) => {
      if (!isTerminated) {
        onTerminate && (await onTerminate());
        isTerminated = true;
      }
    });
  },
});
