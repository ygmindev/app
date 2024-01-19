import { Container } from '@lib/backend/core/utils/Container/Container';
import { SocketService } from '@lib/backend/http/resources/Socket/SocketService/SocketService';
import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import {
  LAMBDA_PLUGIN,
  LAMBDA_TYPE,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export const main = createLambdaHandler({
  handler: async ({ body, context }) => {
    const socketService = Container.get(SocketService);
    const { pathname, user } = context;
    switch (pathname) {
      case '$connect': {
        if (user) {
          const socket = await socketService.create({ form: { externalId: context.requestId } });
        }
        return {
          body: { message: 'success' },
          statusCode: HTTP_STATUS_CODE.SUCCESS,
        };
      }
      case '$disconnect': {
        await socketService.remove({ filter: [{ field: 'externalId', value: context.requestId }] });
        return {
          body: { message: 'success' },
          statusCode: HTTP_STATUS_CODE.SUCCESS,
        };
      }
      default: {
        return {
          body,
          requestId: context.requestId,
        };
      }
    }
  },
  plugins: [LAMBDA_PLUGIN.AUTHENTICATION, LAMBDA_PLUGIN.DATABASE],
  type: LAMBDA_TYPE.WEBSOCKET,
});
