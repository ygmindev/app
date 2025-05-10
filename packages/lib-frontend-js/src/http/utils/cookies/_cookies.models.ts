import { type CookieOptionsModel } from '@lib/shared/http/http.models';

export type _CookiesModel = {
  expire(key: string, options?: CookieOptionsModel): void;

  get<TType extends string = string>(key: string): TType | null;

  set<TType extends string = string>(key: string, value: TType, options?: CookieOptionsModel): void;
};
