import 'source-map-support/register';

let isInitialized: boolean;

export const initialize = async (): Promise<void> => {
  if (!isInitialized) {
    isInitialized = true;
  }
};
