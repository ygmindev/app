import { type TemplateParamsModel } from '@lib/backend/core/utils/template/template.models';
import {
  type _SmsModel,
  type _SmsParamsModel,
} from '@lib/backend/notification/utils/sms/_sms.models';

export type SmsParamsModel<TType extends unknown> = Omit<_SmsParamsModel, 'body'> &
  TemplateParamsModel<TType>;

export type SmsModel = _SmsModel;
