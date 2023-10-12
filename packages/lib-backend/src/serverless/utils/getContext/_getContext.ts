import { getUserFromHeader } from '#lib-backend/auth/utils/getUserFromHeader/getUserFromHeader';
import {
  type _GetContextModel,
  type _GetContextParamsModel,
} from '#lib-backend/serverless/utils/getContext/_getContext.models';
import { type ContextModel } from '#lib-shared/resource/utils/Context/Context.models';

export const _getContext = async ({
  context,
  event,
}: _GetContextParamsModel): Promise<_GetContextModel> => {
  const { authorization } = event.headers;
  const user = await getUserFromHeader(authorization);
  if (user) {
    (context as unknown as ContextModel).user = user;
  }
  return context;
};
