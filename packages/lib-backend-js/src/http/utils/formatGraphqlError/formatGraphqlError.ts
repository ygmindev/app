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
  const e = (params.originalError as HttpError) ?? params;
  const error = new GraphQLError(e.message, {
    extensions: {
      stack: e?.stack ?? (params.extensions?.stacktrace as string),
      statusCode: e?.statusCode ?? HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
    },
  });
  logger.error(error.extensions.stack);
  return error;
};
