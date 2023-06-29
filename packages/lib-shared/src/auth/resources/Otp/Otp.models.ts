import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type OtpModel = {
  callingCode?: string;
  created: Date;
  email?: string;
  otp: string;
  phone?: string;
} & Omit<EntityResourceModel, 'created'>;

export type OtpFormModel = {
  checkExists?: boolean;
  otp?: string;
} & Pick<OtpModel, 'email' | 'phone' | 'callingCode'>;
