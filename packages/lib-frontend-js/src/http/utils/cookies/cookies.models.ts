import { type _CookiesModel } from '@lib/frontend/http/utils/cookies/_cookies.models';

export type CookiesModel = _CookiesModel;

export type CookiesOptionModel = {
  domain?: string;
  expires?: Date;
  isSecure?: boolean;
  path?: string;
};
