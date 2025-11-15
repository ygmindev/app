import {
  type _SmsClientModel,
  type _SmsClientParamsModel,
  type _SmsMessageModel,
} from '@lib/backend/notification/utils/SmsClient/_SmsClient.models';
import { type Twilio } from 'twilio';
import twilio from 'twilio';

export class _SmsClient implements _SmsClientModel {
  protected _client: Twilio;

  constructor({ id, secret }: _SmsClientParamsModel) {
    this._client = twilio(id, secret);
  }

  async send({ body, from, to }: _SmsMessageModel): Promise<void> {
    await this._client.messages.create({ body, from, to });
  }
}
