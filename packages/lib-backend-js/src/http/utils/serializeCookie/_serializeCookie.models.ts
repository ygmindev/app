import { type CookieOptionsModel } from '@lib/shared/http/http.models';

export type _SerializeCookieParamsModel = [
  key: string,
  value: string,
  options?: CookieOptionsModel,
];

export type _SerializeCookieModel = string;
