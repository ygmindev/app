import { _createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/_createLambdaHandler';
import {
  type CreateLambdaHandlerModel,
  type CreateLambdaHandlerParamsModel,
  type LambdaTypeModel,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.models';

export const createLambdaHandler = <TType extends LambdaTypeModel>({
  ...params
}: CreateLambdaHandlerParamsModel<TType>): CreateLambdaHandlerModel =>
  _createLambdaHandler({ ...params });
