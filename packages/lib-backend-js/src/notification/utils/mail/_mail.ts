import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import {
  type _MailModel,
  type _MailParamsModel,
} from '@lib/backend/notification/utils/mail/_mail.models';
import Email from 'email-templates';
import toNumber from 'lodash/toNumber';
import { createTransport } from 'nodemailer';

const transport = createTransport({
  auth: { pass: process.env.SERVER_EMAIL_PASSWORD, user: process.env.SERVER_EMAIL_USERNAME },
  host: process.env.SERVER_EMAIL_HOST,
  pool: true,
  port: toNumber(process.env.SERVER_EMAIL_PORT),
});

export const _mail = async <TType extends unknown>({
  from,
  params,
  template,
  to,
}: _MailParamsModel<TType>): Promise<_MailModel> => {
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
