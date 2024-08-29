export type _MailParamsModel<TType extends unknown> = {
  from: string;
  params?: TType;
  template: string;
  to: Array<string>;
};

export type _MailModel = boolean;
