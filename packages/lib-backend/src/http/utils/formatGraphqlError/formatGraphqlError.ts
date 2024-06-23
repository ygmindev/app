import {
  type FormatGraphqlErrorModel,
  type FormatGraphqlErrorParamsModel,
} from '@lib/backend/http/utils/formatGraphqlError/formatGraphqlError.models';
import { type HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import { GraphQLError } from 'graphql';

export const formatGraphqlError = (
  params: FormatGraphqlErrorParamsModel,
): FormatGraphqlErrorModel => {
  const originalError = params.originalError as HttpError;
  const error = new GraphQLError(originalError?.message ?? params.message, {
    extensions: {
      stack:
        originalError?.stack ??
        (params.extensions?.stacktrace as string) ??
        (params as Error)?.stack,
      statusCode: originalError?.statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
    },
  });
  logger.error(error);
  return error;
};
