import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type UtilityModel = EntityResourceModel & {
  description?: string;

  imageSrc?: string;

  name: string;

  pricing?: string;

  type: Array<UTILITY_TYPE>;

  url?: string;
};

export enum UTILITY_TYPE {
  AUTHENTICATION = 'authentication',
  DATABASE = 'database',
  FUNCTION = 'function',
  HOSTING = 'hosting',
  PAYMENT = 'payment',
  SMS = 'sms',
  SMTP = 'smtp',
  USAGE = 'usage',
}
