import { type HTTP_PROTOCOL } from '@lib/shared/http/http.constants';
import { type UriModel } from '@lib/shared/route/route.models';

export type UriParamsModel<TType = object> = UriModel<TType> & {
  isTrim?: boolean;
  protocol?: HTTP_PROTOCOL;
};
