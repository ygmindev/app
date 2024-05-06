import {
  type _MailModel,
  type _MailParamsModel,
} from '@lib/backend/notification/utils/mail/_mail.models';

export type MailParamsModel<TParams> = _MailParamsModel<TParams>;

export type MailModel = _MailModel;
