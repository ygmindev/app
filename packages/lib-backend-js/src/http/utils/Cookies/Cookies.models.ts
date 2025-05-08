import {
  type _CookiesModel,
  type _CookiesParamsModel,
} from '@lib/backend/http/utils/Cookies/_Cookies.models';
import { type SAME_SITE } from '@lib/backend/http/utils/Cookies/Cookies.constants';

export type CookiesParamsModel = _CookiesParamsModel;

export type CookiesModel = _CookiesModel;

export type CookiesOptionModel = {
  domain?: string;
  expires?: Date;
  isHttpOnly?: boolean;
  isSecure?: boolean;
  isSigned?: boolean;
  path?: string;
  sameSite?: CookiesSameSiteModel;
};

export type CookiesSameSiteModel = `${SAME_SITE}`;
