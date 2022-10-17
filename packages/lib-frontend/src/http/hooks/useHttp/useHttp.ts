import { useErrorBoundary } from '@lib/frontend/core/hooks/useErrorBoundary/useErrorBoundary';
import type { UseHttpModel } from '@lib/frontend/http/hooks/useHttp/useHttp.models';
import { HttpError } from '@lib/shared/http/errors/HttpError/HttpError';
import { HttpService } from '@lib/shared/http/utils/HttpService/HttpService';
import type { GraphQLError } from 'graphql';
import { get } from 'lodash';

export const useHttp: UseHttpModel = (params) => {
  const { handleError } = useErrorBoundary();

  return new HttpService({
    ...params,

    onError: handleError,

    onResponse: async (respone) => {
      const graphQlError = get(respone, ['data', 'errors', 0]) as GraphQLError;
      if (graphQlError) {
        throw new HttpError(graphQlError.extensions.exception.statusCode, graphQlError.message);
      }
      return respone;
    },
  });
};
