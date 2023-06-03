import { Otp, OtpForm } from '@lib/backend/auth/resources/Otp/Otp';
import { OtpService } from '@lib/backend/auth/resources/Otp/OtpService/OtpService';
import { withContainer } from '@lib/backend/core/decorators/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/decorators/withResolver/withResolver';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import { OTP_RESOURCE_NAME } from '@lib/shared/auth/resources/Otp/Otp.constants';
import type { OtpFormModel, OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import type { OtpServiceModel } from '@lib/shared/auth/resources/Otp/OtpService/OtpService.models';

@withContainer()
@withResolver({ Resource: Otp })
export class OtpResolver
  extends EntityResourceResolver<OtpModel, OtpFormModel>({
    Resource: Otp,
    ResourceData: OtpForm,
    ResourceService: OtpService,
    name: OTP_RESOURCE_NAME,
  })
  implements OtpServiceModel {}
