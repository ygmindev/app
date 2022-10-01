import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import type { _MailParamsModel } from '@lib/backend/mail/utils/mail/_mail.models';
import { getEnv } from '@lib/shared/environment/utils/getEnv/getEnv';
import { debug } from '@lib/shared/logging/utils/logger/logger';
import Email from 'email-templates';
import { toNumber } from 'lodash';
import { createTransport } from 'nodemailer';

const SERVER_EMAIL_HOST = getEnv('SERVER_EMAIL_HOST');
const SERVER_EMAIL_PORT = toNumber(getEnv('SERVER_EMAIL_PORT'));
const SERVER_EMAIL_USERNAME = getEnv('SERVER_EMAIL_USERNAME');
const SERVER_EMAIL_PASSWORD = getEnv('SERVER_EMAIL_PASSWORD');

const transport = createTransport({
  auth: { pass: SERVER_EMAIL_PASSWORD, user: SERVER_EMAIL_USERNAME },
  host: SERVER_EMAIL_HOST,
  pool: true,
  port: SERVER_EMAIL_PORT,
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
