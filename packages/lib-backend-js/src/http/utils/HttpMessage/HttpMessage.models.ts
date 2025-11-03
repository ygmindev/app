export type HttpMessageParamsModel<TType extends unknown> = {
  body?: TType;
  cookies?: Record<string, string>;
  headers?: Record<string, string>;
  id?: string;
};

export type HttpMessageModel<TType extends unknown> = HttpMessageParamsModel<TType>;
