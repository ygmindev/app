import { type OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { type EntityResourceImplementationModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';

export type OtpImplementationModel = EntityResourceImplementationModel<OtpModel>;
