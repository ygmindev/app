import { Container } from '@lib/backend/core/utils/Container/Container';
import { SocketImplementation } from '@lib/backend/http/resources/Socket/SocketImplementation/SocketImplementation';
import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import {
  LAMBDA_PLUGIN,
  LAMBDA_TYPE,
} from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';

export const main = createLambdaHandler({
  handler: async ({ body, context }) => {
    const socketImplementation = Container.get(SocketImplementation);
    const { pathname, user } = context;
    switch (pathname) {
      case '$connect': {
        if (user) {
          const socket = await socketImplementation.create({ form: { externalId: context.requestId } });
        }
        return {
          body: { message: 'success' },
          statusCode: HTTP_STATUS_CODE.SUCCESS,
        };
      }
      case '$disconnect': {
        await socketImplementation.remove({ filter: [{ field: 'externalId', value: context.requestId }] });
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
