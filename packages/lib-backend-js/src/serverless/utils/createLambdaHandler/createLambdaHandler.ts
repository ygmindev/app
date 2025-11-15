import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { _createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/_createLambdaHandler';
import {
  type CreateLambdaHandlerModel,
  type CreateLambdaHandlerParamsModel,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.models';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { uri } from '@lib/shared/http/utils/uri/uri';

export const createLambdaHandler = <TType extends Record<string, unknown>>({
  ...params
}: CreateLambdaHandlerParamsModel<TType>): CreateLambdaHandlerModel => {
  const environment = Container.get(Environment);
  return _createLambdaHandler<TType>({
    ...params,
    websocketUri: uri({
      host: environment.variables.SERVER_APP_HOST,
      port: environment.variables.SERVER_APP_WEBSOCKET_PORT,
    }),
  });
};
