import type { OtpFormModel, OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import type { EntityResourceServiceModel } from '@lib/shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';

export interface UseOtpResourceModel
  extends Pick<EntityResourceServiceModel<OtpModel, OtpFormModel>, 'create'> {
  createIfNotExists: EntityResourceServiceModel<OtpModel, OtpFormModel>['create'];
}
