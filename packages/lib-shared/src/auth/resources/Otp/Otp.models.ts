import type { EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export interface OtpModel extends Omit<EntityResourceModel, 'created'> {
  created: Date;
  otp: string;
  username: string;
}

export interface OtpFormModel extends Pick<OtpModel, 'username'> {
  otp?: string;
}
