import { type OtpFormModel, type OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';
import { type EntityResourceServiceModel } from '#lib-shared/resource/services/EntityResourceService/EntityResourceService.models';

export type OtpServiceModel = EntityResourceServiceModel<OtpModel, OtpFormModel>;
