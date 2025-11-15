import {
  type _EmailClientModel,
  type _EmailClientParamsModel,
} from '@lib/backend/notification/utils/EmailClient/_EmailClient.models';
import { type EmailMessageModel } from '@lib/backend/notification/utils/EmailClient/EmailClient.models';
import Email from 'email-templates';
import toNumber from 'lodash/toNumber';
import { createTransport, type Transporter } from 'nodemailer';

export class _EmailClient implements _EmailClientModel {
  protected _templateDir: string;
  protected _transport: Transporter;

  constructor({ host, password, port, templateDir, username }: _EmailClientParamsModel) {
    this._transport = createTransport({
      auth: { pass: password, user: username },
      host,
      pool: true,
      port: toNumber(port),
    });
    this._templateDir = templateDir;
  }

  async send({ from, params, template, to }: EmailMessageModel): Promise<void> {
    await new Email({
      send: true,
      transport: this._transport,
      views: { options: { extension: 'ejs' }, root: this._templateDir },
    }).send({ locals: params, message: { from, to }, template });
  }
}
