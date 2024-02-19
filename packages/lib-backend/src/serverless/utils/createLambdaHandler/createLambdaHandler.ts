import { _createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/_createLambdaHandler';
import {
  type CreateLambdaHandlerModel,
  type CreateLambdaHandlerParamsModel,
  type LambdaTypeModel,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.models';
import { uri } from '@lib/shared/http/utils/uri/uri';

export const createLambdaHandler = <TType extends LambdaTypeModel>({
  ...params
}: CreateLambdaHandlerParamsModel<TType>): CreateLambdaHandlerModel =>
  _createLambdaHandler({
    ...params,
    websocketUri: uri({
      host: process.env.SERVER_APP_HOST,
      port: process.env.SERVER_APP_WEBSOCKET_PORT,
    }),
  });
