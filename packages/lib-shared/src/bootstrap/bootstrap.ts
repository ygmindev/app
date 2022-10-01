import 'reflect-metadata';

let isInitialized: boolean;

export const bootstrap = async (): Promise<void> => {
  if (!isInitialized) {
    isInitialized = true;
  }
};
