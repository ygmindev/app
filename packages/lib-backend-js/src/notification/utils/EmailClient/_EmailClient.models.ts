import { type EmailMessageModel } from '@lib/backend/notification/utils/EmailClient/EmailClient.models';

export type _EmailClientParamsModel = {
  host: string;
  password: string;
  port: string;
  templateDir: string;
  username: string;
};

export type _EmailClientModel = {
  send(params: EmailMessageModel): Promise<void>;
};
