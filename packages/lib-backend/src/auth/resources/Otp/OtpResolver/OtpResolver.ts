import { Otp, OtpForm } from '#lib-backend/auth/resources/Otp/Otp';
import { OtpService } from '#lib-backend/auth/resources/Otp/OtpService/OtpService';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { withResolver } from '#lib-backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '#lib-backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { OTP_RESOURCE_NAME } from '#lib-shared/auth/resources/Otp/Otp.constants';
import { type OtpFormModel, type OtpModel } from '#lib-shared/auth/resources/Otp/Otp.models';
import { type OtpServiceModel } from '#lib-shared/auth/resources/Otp/OtpService/OtpService.models';

const EntityResourceResolver = createEntityResourceResolver<OtpModel, OtpFormModel>({
  Resource: Otp,
  ResourceData: OtpForm,
  ResourceService: OtpService,
  name: OTP_RESOURCE_NAME,
});

@withContainer()
@withResolver({ Resource: Otp })
export class OtpResolver extends EntityResourceResolver implements OtpServiceModel {}
