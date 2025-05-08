import {
  type _CookiesModel,
  type _CookiesParamsModel,
} from '@lib/backend/http/utils/Cookies/_Cookies.models';
import { SAME_SITE } from '@lib/backend/http/utils/Cookies/Cookies.constants';
import { type CookiesOptionModel } from '@lib/backend/http/utils/Cookies/Cookies.models';
import Cookies from 'Cookies';
import { type IncomingMessage, type ServerResponse } from 'http';

export class _Cookies implements _CookiesModel {
  cookies: Cookies;

  constructor({ req, res }: _CookiesParamsModel) {
    this.cookies = new Cookies(
      req as unknown as IncomingMessage,
      res as unknown as ServerResponse<IncomingMessage>,
    );
  }

  expire(key: string, options?: CookiesOptionModel): void {
    this.set(key, '', options);
  }

  get<TType extends string = string>(key: string, options?: CookiesOptionModel): TType | null {
    return this.cookies.get(key, {
      signed: options?.isSigned ?? false,
    }) as TType | null;
  }

  set<TType extends string = string>(
    key: string,
    value: TType,
    options?: CookiesOptionModel,
  ): void {
    this.cookies.set(key, value, {
      domain: options?.domain,
      expires: options?.expires,
      httpOnly: options?.isHttpOnly,
      path: options?.path,
      sameSite: options?.sameSite ?? SAME_SITE.STRICT,
      secure: options?.isSecure,
      signed: options?.isSigned,
    });
  }
}
