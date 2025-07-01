import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type UserModel } from '@lib/model/user/User/User.models';

export type UtilityModel = EntityResourceModel & {
  description?: string;

  imageSrc?: string;

  name: string;

  pricing?: string;

  rrr?: Partial<UserModel>;

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
