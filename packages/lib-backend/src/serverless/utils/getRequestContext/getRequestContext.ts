import { _getRequestContext } from '#lib-backend/serverless/utils/getRequestContext/_getRequestContext';
import {
  type GetRequestContextModel,
  type GetRequestContextParamsModel,
} from '#lib-backend/serverless/utils/getRequestContext/getRequestContext.models';

export const getRequestContext = async (
  params: GetRequestContextParamsModel,
): Promise<GetRequestContextModel> => _getRequestContext(params);
