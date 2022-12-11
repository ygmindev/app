import { initialize as initializeBase } from '@lib/shared/setup/utils/initialize/initialize';

let isInitialized = false;

export const initialize = async (): Promise<void> => {
  if (!isInitialized) {
    await initializeBase();
    isInitialized = true;
  }
};
