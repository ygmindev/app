import { type _EmailClientModel } from '@lib/backend/notification/utils/EmailClient/_EmailClient.models';

export type EmailClientModel = _EmailClientModel;

export type EmailMessageModel<TType = unknown> = {
  from: string;
  params?: TType;
  template: string;
  to: Array<string>;
};
