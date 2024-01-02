import { getUserFromHeader } from '#lib-backend/auth/utils/getUserFromHeader/getUserFromHeader';
import {
  type _GetRequestContextModel,
  type _GetRequestContextParamsModel,
} from '#lib-backend/serverless/utils/getRequestContext/_getRequestContext.models';
import { type ContextModel } from '#lib-platform/core/core.models';

export const _getRequestContext = async ({
  context,
  event,
}: _GetRequestContextParamsModel): Promise<_GetRequestContextModel> => {
  const { authorization } = event.headers;
  const user = await getUserFromHeader(authorization);
  user && ((context as unknown as ContextModel).user = user);
  event.headers.group && ((context as unknown as ContextModel).group = event.headers.group);
  return context;
};
