export interface _MailParamsModel<TParams> {
  from: string;
  params: TParams;
  template: string;
  to: Array<string>;
}
