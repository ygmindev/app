export type _MailParamsModel<TParams> = {
  from: string;
  params?: TParams;
  template: string;
  to: Array<string>;
};

export type _MailModel = boolean;
