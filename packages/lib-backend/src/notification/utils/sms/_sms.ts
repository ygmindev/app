import type { _SmsModel, _SmsParamsModel } from '@lib/backend/notification/utils/sms/_sms.models';
import twilio from 'twilio';

const _client = twilio(process.env.SERVER_TWILIO_SID, process.env.SERVER_TWILIO_TOKEN);

export const _sms = async ({ body, from, to }: _SmsParamsModel): Promise<_SmsModel> => {
  try {
    await _client.messages.create({ body, from, to });
    return true;
  } catch (e) {
    return false;
  }
};
