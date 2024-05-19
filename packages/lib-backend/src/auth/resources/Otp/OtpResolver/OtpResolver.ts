import { Otp, OtpForm } from '@lib/backend/auth/resources/Otp/Otp';
import { OtpImplementation } from '@lib/backend/auth/resources/Otp/OtpImplementation/OtpImplementation';
import { type OtpResolverModel } from '@lib/backend/auth/resources/Otp/OtpResolver/OtpResolver.models';
import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { OTP_RESOURCE_NAME } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { type OtpFormModel, type OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';

@withContainer()
@withResolver({ Resource: () => Otp })
export class OtpResolver
  extends createEntityResourceResolver<OtpModel, OtpFormModel>({
    Resource: () => Otp,
    ResourceData: () => OtpForm,
    ResourceImplementation: OtpImplementation,
    access: {
      [RESOURCE_METHOD_TYPE.CREATE]: ACCESS_LEVEL.PUBLIC,
    },
    name: OTP_RESOURCE_NAME,
  })
  implements OtpResolverModel {}
