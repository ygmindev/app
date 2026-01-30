import { type OtpModel } from '@lib/model/auth/Otp/Otp.models';
import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type OtpImplementationModel = EntityResourceImplementationModel<OtpModel> & {
  verify(data: Partial<OtpModel>): Promise<Partial<OtpModel>>;
};
