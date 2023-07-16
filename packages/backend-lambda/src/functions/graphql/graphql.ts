import { initialize } from '#backend-lambda/setup/utils/initialize/initialize';
import { type InitializeModel } from '#backend-lambda/setup/utils/initialize/initialize.models';
import { createHandler } from '#lib-backend/serverless/utils/createHandler/createHandler';

let initialized: InitializeModel;

const getInitialized = async (): Promise<InitializeModel> => {
  initialized = initialized ?? (await initialize());
  return initialized;
};

export const main = createHandler(async (event, context, callback) => {
  const { handler } = await getInitialized();
  return handler(event, context, callback);
});
