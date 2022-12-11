import type { OtpFormModel, OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import type { OtpServiceModel } from '@lib/shared/auth/resources/Otp/OtpService/OtpService.models';
import type { EntityResourceServiceModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export interface UseOtpResourceModel extends Pick<OtpServiceModel, 'create'> {
  createIfNotExists: EntityResourceServiceModel<OtpModel, OtpFormModel>['create'];
}
