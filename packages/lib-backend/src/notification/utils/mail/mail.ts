import { _mail } from '@lib/backend/notification/utils/mail/_mail';
import type { MailModel, MailParamsModel } from '@lib/backend/notification/utils/mail/mail.models';
import { info } from '@lib/shared/logging/utils/logger/logger';

export const mail = async <TParams>({
  ...params
}: MailParamsModel<TParams>): Promise<MailModel> => {
  if (process.env.NODE_ENV === 'production') {
    return _mail({ ...params });
  }
  info('[mail]', params);
  return true;
};
