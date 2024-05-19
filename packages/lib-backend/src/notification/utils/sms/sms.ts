import { template } from '@lib/backend/core/utils/template/template';
import { _sms } from '@lib/backend/notification/utils/sms/_sms';
import { type SmsModel, type SmsParamsModel } from '@lib/backend/notification/utils/sms/sms.models';
import { debug } from '@lib/shared/logging/utils/logger/logger';

export const sms = async <TType extends unknown>({
  from,
  params,
  pathname,
  to,
}: SmsParamsModel<TType>): Promise<SmsModel> => {
  if (process.env.NODE_ENV === 'production') {
    return _sms({ body: await template({ params, pathname }), from, to });
  }
  debug(params);
  return true;
};
