import type { _SmsModel, _SmsParamsModel } from '@lib/backend/notification/utils/sms/_sms.models';
import type { Twilio } from 'twilio';
import twilio from 'twilio';

let _client: Twilio;

export const _sms = async ({ body, from, to }: _SmsParamsModel): Promise<_SmsModel> => {
  try {
    _client = _client ?? twilio(process.env.SERVER_TWILIO_SID, process.env.SERVER_TWILIO_TOKEN);
    await _client.messages.create({ body, from, to });
    return true;
  } catch (e) {
    return false;
  }
};
