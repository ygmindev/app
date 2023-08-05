import { _getContext } from '#lib-backend/serverless/utils/getContext/_getContext';
import {
  type GetContextModel,
  type GetContextParamsModel,
} from '#lib-backend/serverless/utils/getContext/getContext.models';

export const getContext = async (params: GetContextParamsModel): Promise<GetContextModel> =>
  _getContext(params);
