import { type CookiesOptionModel } from '@lib/backend/http/utils/Cookies/Cookies.models';

export type _CookiesParamsModel = { req: Request; res: Response };

export type _CookiesModel = {
  expire(key: string, options?: CookiesOptionModel): void;

  get<TType extends string = string>(key: string, options?: CookiesOptionModel): TType | null;

  set<TType extends string = string>(key: string, value: TType, options?: CookiesOptionModel): void;
};
