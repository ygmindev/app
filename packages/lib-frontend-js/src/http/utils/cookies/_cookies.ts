import { type _CookiesModel } from '@lib/frontend/http/utils/cookies/_cookies.models';
import { type CookieOptionsModel } from '@lib/shared/http/http.models';
import Cookies from 'cookies-js';

export const _cookies: _CookiesModel = {
  expire: (key, options?) =>
    Cookies.expire(key, {
      domain: options?.domain,
      expires: options?.expires,
      path: options?.path,
      secure: options?.isSecure,
    }),

  get: <TType extends string = string>(key: string) => Cookies.get(key) as TType | null,

  set: <TType extends string = string>(key: string, value: TType, options?: CookieOptionsModel) =>
    Cookies.set(key, value, {
      domain: options?.domain,
      expires: options?.expires,
      path: options?.path,
      secure: options?.isSecure,
    }),
};
