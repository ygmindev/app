import { _mail } from '@lib/backend/notification/utils/mail/_mail';
import {
  type MailModel,
  type MailParamsModel,
} from '@lib/backend/notification/utils/mail/mail.models';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';

export const mail = async <TType extends unknown>({
  ...params
}: MailParamsModel<TType>): Promise<MailModel> => {
  if (process.env.NODE_ENV === 'production') {
    return _mail({ ...params });
  }
  logger.debug(params);
  return true;
};
