import { type LambdaContextModel } from '#backend-lambda/core/core.models';
import { setup } from '#backend-lambda/core/utils/setup/setup';
import { createHandler } from '#lib-backend/serverless/utils/createHandler/createHandler';
import { type OptionalCallablePromiseModel } from '#lib-shared/core/core.models';

let lambdaContext: LambdaContextModel;

const getContext: OptionalCallablePromiseModel<LambdaContextModel> = async () => {
  lambdaContext = lambdaContext ?? (await setup());
  return lambdaContext;
};

export const main = createHandler(async (event, context, callback) => {
  const { handler } = await getContext();
  return handler(event, context, callback);
});
