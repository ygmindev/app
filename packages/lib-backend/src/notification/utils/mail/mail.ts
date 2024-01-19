import { _mail } from '@lib/backend/notification/utils/mail/_mail';
import {
  type MailModel,
  type MailParamsModel,
} from '@lib/backend/notification/utils/mail/mail.models';
import { debug } from '@lib/shared/logging/utils/logger/logger';

export const mail = async <TParams>({
  ...params
}: MailParamsModel<TParams>): Promise<MailModel> => {
  if (process.env.NODE_ENV === 'production') {
    return _mail({ ...params });
  }
  debug(params);
  return true;
};
