import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export type OtpModel = EntityResourceModel & {
  callingCode?: string;

  email?: string;

  otp?: string;

  phone?: string;
};
