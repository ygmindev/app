import { type SAME_SITE } from '@lib/shared/http/http.constants';

export type CookieOptionsModel = {
  domain?: string;
  expires?: Date;
  isHttpOnly?: boolean;
  isSecure?: boolean;
  maxAge?: number;
  path?: string;
  sameSite?: SAME_SITE;
};
