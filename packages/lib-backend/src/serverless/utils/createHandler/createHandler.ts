import { _createHandler } from '#lib-backend/serverless/utils/createHandler/_createHandler';
import {
  type CreateHandlerModel,
  type CreateHandlerParamsModel,
} from '#lib-backend/serverless/utils/createHandler/createHandler.models';

export const createHandler = (params: CreateHandlerParamsModel): CreateHandlerModel =>
  _createHandler(params);
