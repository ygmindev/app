import { type EntityResourceModel } from 'packages/lib-model-js/src/resource/resources/EntityResource/EntityResource.models';

export type UtilityModel = EntityResourceModel & {
  description?: string;

  imageSrc?: string;

  name: string;

  pricing?: string;

  type: Array<UtilityTypeModel>;

  url?: string;
};

export enum UtilityTypeModel {
  AUTHENTICATION = 'authentication',
  DATABASE = 'database',
  FUNCTION = 'function',
  HOSTING = 'hosting',
  PAYMENT = 'payment',
  SMS = 'sms',
  SMTP = 'smtp',
  USAGE = 'usage',
}
