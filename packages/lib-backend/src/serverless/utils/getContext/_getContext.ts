import type { Context } from 'aws-lambda';

import { JwtService } from '#lib-backend/auth/utils/JwtService/JwtService';
import type { _GetContextParamsModel } from '#lib-backend/serverless/utils/getContext/_getContext.models';
import type { SignInTokenModel } from '#lib-shared/auth/resources/SignIn/SignIn.models';

export const _getContext = async ({ context, event }: _GetContextParamsModel): Promise<Context> => {
  const { authorization } = event.headers;
  if (authorization) {
    const [_, token] = authorization.split(' ');
    if (token && token !== 'null') {
      const user = await JwtService.verifyToken(token);
      (context as unknown as { user: SignInTokenModel }).user = user;
    }
  }
  return context;
};
