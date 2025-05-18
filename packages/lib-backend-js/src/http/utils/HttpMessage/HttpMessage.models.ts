export type HttpMessageParamsModel<TType> = {
  body?: TType;
  cookies?: Record<string, string>;
  headers?: Record<string, string>;
};

export type HttpMessageModel<TType> = HttpMessageParamsModel<TType>;
