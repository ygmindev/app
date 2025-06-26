import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type OtpModel = EntityResourceModel & {
  callingCode?: string;
  email?: string;
  otp?: string;
  phone?: string;
};

export type OtpFormModel = Pick<OtpModel, 'email' | 'phone' | 'callingCode'> & {
  isCheckExists?: boolean;
  otp?: string;
};
