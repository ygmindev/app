import { type HttpMessageParamsModel } from '@lib/backend/http/utils/HttpMessage/HttpMessage.models';
import { type HttpMethodModel } from '@lib/shared/http/http.models';
import { type I18nModel } from '@lib/shared/locale/locale.models';

export type HttpRequestParamsModel<TType> = HttpMessageParamsModel<TType> & {
  i18n?: I18nModel;
  lang?: string;
  method?: HttpMethodModel;
  query?: URLSearchParams;
  url: string;
};

export type HttpRequestModel<TType> = HttpRequestParamsModel<TType>;
