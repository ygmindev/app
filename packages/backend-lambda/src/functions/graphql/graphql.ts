import { initialize } from '#backend-lambda/setup/utils/initialize/initialize';
import { type InitializeContextModel } from '#backend-lambda/setup/utils/initialize/initialize.models';
import { createHandler } from '#lib-backend/serverless/utils/createHandler/createHandler';
import { type OptionalCallablePromiseModel } from '#lib-shared/core/core.models';

let initializeContext: InitializeContextModel;

const getContext: OptionalCallablePromiseModel<InitializeContextModel> = async () => {
  initializeContext = initializeContext ?? (await initialize());
  return initializeContext;
};

export const main = createHandler(async (event, context, callback) => {
  const { handler } = await getContext();
  return handler(event, context, callback);
});
