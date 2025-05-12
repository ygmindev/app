import { type PingModel, type PingParamsModel } from '@lib/backend/http/handlers/ping/ping.models';
import { type ApiHandlerModel } from '@lib/config/api/api.models';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export const ping: ApiHandlerModel<PingModel, PingParamsModel> = async (
  _,
  { requestId, user } = {},
) => {
  return {
    body: { message: 'success', userId: user?._id },
    status: HTTP_STATUS_CODE.OK,
  };
};
