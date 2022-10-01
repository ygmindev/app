import type {
  HttpServiceModel,
  HttpServiceParamsModel,
} from '@lib/shared/http/utils/HttpService/HttpService.models';

export type UseHttpModel = (params: HttpServiceParamsModel) => HttpServiceModel;
