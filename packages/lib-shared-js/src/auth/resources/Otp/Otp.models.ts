import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type OtpModel = Omit<EntityResourceModel, 'created'> & {
  callingCode?: string;
  created: Date;
  email?: string;
  otp?: string;
  phone?: string;
};
