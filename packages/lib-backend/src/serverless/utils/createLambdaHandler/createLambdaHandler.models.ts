import {
  type _CreateLambdaHandlerModel,
  type _CreateLambdaHandlerParamsModel,
} from '@lib/backend/serverless/utils/createLambdaHandler/_createLambdaHandler.models';
import {
  type LAMBDA_PLUGIN,
  type LAMBDA_TYPE,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';

export type CreateLambdaHandlerParamsModel<TType extends Record<string, unknown>> = Omit<
  _CreateLambdaHandlerParamsModel<TType>,
  'websocketUri'
>;

export type CreateLambdaHandlerModel = _CreateLambdaHandlerModel;

export type LambdaTypeModel = `${LAMBDA_TYPE}`;

export type LambdaPluginModel = `${LAMBDA_PLUGIN}`;

export type LambdaResponseModel = {
  body?: unknown;
  headers?: object;
  requestId?: string;
  statusCode?: number;
};
