import {
  type _SmsModel,
  type _SmsParamsModel,
} from '@lib/backend/notification/utils/sms/_sms.models';
import { type Twilio } from 'twilio';
import twilio from 'twilio';

let client: Twilio;

export const _sms = async ({ body, from, to }: _SmsParamsModel): Promise<_SmsModel> => {
  try {
    client = client ?? twilio(process.env.SERVER_TWILIO_SID, process.env.SERVER_TWILIO_TOKEN);
    await client.messages.create({ body, from, to });
    return true;
  } catch (e) {
    return false;
  }
};
