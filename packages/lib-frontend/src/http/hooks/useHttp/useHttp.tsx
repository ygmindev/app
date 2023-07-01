import { useErrorContext } from '#lib-frontend/core/hooks/useErrorContext/useErrorContext';
import {
  type UseHttpModel,
  type UseHttpParamsModel,
} from '#lib-frontend/http/hooks/useHttp/useHttp.models';
import { HttpService } from '#lib-shared/http/utils/HttpService/HttpService';

export const useHttp = (params: UseHttpParamsModel = {}): UseHttpModel => {
  const { handleError } = useErrorContext();
  return new HttpService({
    ...params,

    onError: handleError,
  });
};
