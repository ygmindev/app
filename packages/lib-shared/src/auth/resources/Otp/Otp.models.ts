import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface OtpModel extends Omit<EntityResourceModel, 'created'> {
  countryCode?: string;
  created: Date;
  email?: string;
  otp: string;
  phone?: string;
}

export interface OtpFormModel extends Pick<OtpModel, 'email' | 'phone' | 'countryCode'> {
  otp?: string;
}
