import { type CookiesOptionModel } from '@lib/frontend/http/utils/cookies/cookies.models';

export type _CookiesModel = {
  expire(key: string, options?: CookiesOptionModel): void;

  get<TType extends string = string>(key: string): TType | null;

  set<TType extends string = string>(key: string, value: TType, options?: CookiesOptionModel): void;
};
