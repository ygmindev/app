import { JwtService } from '@lib/backend/auth/utils/JwtService/JwtService';
import type { _GetContextParamsModel } from '@lib/backend/lambda/utils/getContext/_getContext.models';
import type { Context } from 'aws-lambda';
import { set } from 'lodash';

export const _getContext = async ({ context, event }: _GetContextParamsModel): Promise<Context> => {
  const authorization = event.headers.Authorization;
  if (authorization) {
    const [_, token] = authorization.split(' ');
    if (token && token !== 'null') {
      const { claims } = await JwtService.verifyToken(token);
      set(context, 'user', claims);
    }
  }
  return context;
};
