import { type HttpMessageParamsModel } from '@lib/backend/http/utils/HttpMessage/HttpMessage.models';
import { type HttpMethodModel } from '@lib/shared/http/http.models';

export type HttpRequestParamsModel<TType> = HttpMessageParamsModel<TType> & {
  method?: HttpMethodModel;
  query?: URLSearchParams;
  url: string;
};

export type HttpRequestModel<TType> = HttpRequestParamsModel<TType>;
