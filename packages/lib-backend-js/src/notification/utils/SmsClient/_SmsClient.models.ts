import { type SmsMessageModel } from '@lib/backend/notification/utils/SmsClient/SmsClient.models';

export type _SmsClientParamsModel = {
  id: string;
  secret: string;
};

export type _SmsClientModel = {
  send(params: _SmsMessageModel): Promise<void>;
};

export type _SmsMessageModel = Omit<SmsMessageModel, 'body'> & { body: string };
