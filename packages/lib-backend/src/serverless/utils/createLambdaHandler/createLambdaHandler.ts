import { _createLambdaHandler } from '#lib-backend/serverless/utils/createLambdaHandler/_createLambdaHandler';
import {
  type CreateLambdaHandlerModel,
  type CreateLambdaHandlerParamsModel,
} from '#lib-backend/serverless/utils/createLambdaHandler/createLambdaHandler.models';

export const createLambdaHandler = ({
  ...params
}: CreateLambdaHandlerParamsModel): CreateLambdaHandlerModel => _createLambdaHandler({ ...params });
