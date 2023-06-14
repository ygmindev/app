import { useErrorContext } from '#lib-frontend/core/hooks/useErrorContext/useErrorContext';
import type {
  UseHttpModel,
  UseHttpParamsModel,
} from '#lib-frontend/http/hooks/useHttp/useHttp.models';
import type { GraphQlHttpResponseModel } from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery.models';
import { HttpError } from '#lib-shared/http/errors/HttpError/HttpError';
import { HttpService } from '#lib-shared/http/utils/HttpService/HttpService';
import type { HttpReponseModel } from '#lib-shared/http/utils/HttpService/HttpService.models';

export const useHttp = (params: UseHttpParamsModel = {}): UseHttpModel => {
  const { handleError } = useErrorContext();
  return new HttpService({
    ...params,

    onError: handleError,

    onResponse: async (response) => {
      const graphQlError = (
        response as HttpReponseModel<GraphQlHttpResponseModel<unknown>>
      ).data?.errors?.at(0);
      if (graphQlError) {
        throw new HttpError(graphQlError.extensions.exception.statusCode, graphQlError.message);
      }
      return response;
    },
  });
};
