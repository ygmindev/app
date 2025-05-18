import { type PingModel, type PingParamsModel } from '@lib/backend/http/handlers/ping/ping.models';
import { HttpResponse } from '@lib/backend/http/utils/HttpResponse/HttpResponse';
import { type ApiHandlerModel } from '@lib/config/api/api.models';

export const ping: ApiHandlerModel<PingModel, PingParamsModel> = async (
  _,
  { requestId, user } = {},
) => {
  return new HttpResponse({
    body: { message: 'success', userId: user?._id },
  });
};
