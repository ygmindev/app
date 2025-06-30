import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type OtpModel = EntityResourceModel & {
  callingCode?: string;

  email?: string;

  otp?: string;

  phone?: string;
};
