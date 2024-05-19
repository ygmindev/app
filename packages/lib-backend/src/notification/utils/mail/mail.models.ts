import {
  type _MailModel,
  type _MailParamsModel,
} from '@lib/backend/notification/utils/mail/_mail.models';

export type MailParamsModel<TType extends unknown> = _MailParamsModel<TType>;

export type MailModel = _MailModel;
