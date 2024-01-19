import { type TemplateParamsModel } from '@lib/backend/core/utils/template/template.models';
import {
  type _SmsModel,
  type _SmsParamsModel,
} from '@lib/backend/notification/utils/sms/_sms.models';

export type SmsParamsModel<TParams> = Omit<_SmsParamsModel, 'body'> & TemplateParamsModel<TParams>;

export type SmsModel = _SmsModel;
