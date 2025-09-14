import {
  type _CreateLambdaHandlerModel,
  type _CreateLambdaHandlerParamsModel,
} from '@lib/backend/serverless/utils/createLambdaHandler/_createLambdaHandler.models';

export type CreateLambdaHandlerParamsModel<TType extends Record<string, unknown>> = Omit<
  _CreateLambdaHandlerParamsModel<TType>,
  'websocketUri'
>;

export type CreateLambdaHandlerModel = _CreateLambdaHandlerModel;

export type LambdaResponseModel = {
  body?: unknown;
  headers?: object;
  requestId?: string;
  statusCode?: number;
};
