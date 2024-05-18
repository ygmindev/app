import { type ApiHandleModel } from '@lib/config/platform/api/api.models';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export const ping: ApiHandleModel = async ({ context }) => {
  const { requestId, user } = context;
  return {
    body: {
      message: 'success',
      requestId,
      user: user?.claims.email,
    },
    headers: { 'Access-Control-Allow-Origin': '*' },
    statusCode: HTTP_STATUS_CODE.SUCCESS,
  };
};
