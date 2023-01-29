import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import type { _MailParamsModel } from '@lib/backend/mail/utils/mail/_mail.models';
import { debug } from '@lib/shared/logging/utils/logger/logger';
import Email from 'email-templates';
import toNumber from 'lodash/toNumber';
import { createTransport } from 'nodemailer';

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
}: _MailParamsModel<TParams>): Promise<boolean> => {
  process.env.NODE_ENV === 'production'
    ? await new Email({
        send: true,
        transport,
        views: { root: fromStatic('mail/templates') },
      }).send({ locals: params, message: { from, to }, template })
    : debug(`from: ${from}; to: ${to}; template: ${template}; params: ${JSON.stringify(params)}`);
  return true;
};
