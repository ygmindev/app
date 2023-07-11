import { type InitializeModel } from '#app-web/setup/utils/initialize/initialize.models.server';
import { initialize as initializeBackend } from '#backend-lambda/setup/utils/initialize/initialize';

export const initialize = async (): InitializeModel => {
  const { database } = await initializeBackend();
  return { database };
};
