import { type TemplateParamsModel } from '@lib/backend/core/utils/template/template.models';
import { type _SmsClientModel } from '@lib/backend/notification/utils/SmsClient/_SmsClient.models';

export type SmsClientModel = _SmsClientModel;

export type SmsMessageModel<TType = unknown> = {
  body: string | TemplateParamsModel<TType>;
  from: string;
  to: string;
};
