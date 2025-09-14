import { type HttpMessageParamsModel } from '@lib/backend/http/utils/HttpMessage/HttpMessage.models';
import { type HTTP_METHOD } from '@lib/shared/http/http.constants';
import { type I18nModel } from '@lib/shared/locale/locale.models';

export type HttpRequestParamsModel<TType extends unknown> = HttpMessageParamsModel<TType> & {
  i18n?: I18nModel;
  lang?: string;
  method?: HTTP_METHOD;
  query?: URLSearchParams;
  url: string;
};

export type HttpRequestModel<TType extends unknown> = HttpRequestParamsModel<TType>;
