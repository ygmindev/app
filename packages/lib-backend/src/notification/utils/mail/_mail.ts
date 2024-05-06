import Email from 'email-templates';
import toNumber from 'lodash/toNumber';
import { createTransport } from 'nodemailer';

import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import {
  type _MailModel,
  type _MailParamsModel,
} from '@lib/backend/notification/utils/mail/_mail.models';

const transport = createTransport({
  auth: { pass: process.env.SERVER_EMAIL_PASSWORD, user: process.env.SERVER_EMAIL_USERNAME },
  host: process.env.SERVER_EMAIL_HOST,
  pool: true,
  port: toNumber(process.env.SERVER_EMAIL_PORT),
});

export const _mail = async <TParams>({
  from,
  params,
  template,
  to,
}: _MailParamsModel<TParams>): Promise<_MailModel> => {
  try {
    await new Email({
      send: true,
      transport,
      views: { options: { extension: 'ejs' }, root: fromStatic('templates') },
    }).send({ locals: params, message: { from, to }, template });
  } catch (e) {
    return false;
  }
  return true;
};
