import type {
  _MailModel,
  _MailParamsModel,
} from '#lib-backend/notification/utils/mail/_mail.models';

export interface MailParamsModel<TParams> extends _MailParamsModel<TParams> {}

export type MailModel = _MailModel;
