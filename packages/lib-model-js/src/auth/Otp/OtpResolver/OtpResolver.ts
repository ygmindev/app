import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { OTP_RESOURCE_NAME } from '@lib/model/auth/Otp/Otp.constants';
import { Otp } from '@lib/model/auth/Otp/Otp.entity';
import { type OtpModel } from '@lib/model/auth/Otp/Otp.models';
import { OtpImplementation } from '@lib/model/auth/Otp/OtpImplementation/OtpImplementation';
import { type OtpResolverModel } from '@lib/model/auth/Otp/OtpResolver/OtpResolver.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

@withContainer()
@withResolver({ Resource: () => Otp })
export class OtpResolver
  extends createEntityResourceResolver<OtpModel>({
    Resource: () => Otp,
    ResourceImplementation: OtpImplementation,
    access: {
      [RESOURCE_METHOD_TYPE.CREATE]: ACCESS_LEVEL.PUBLIC,
    },
    name: OTP_RESOURCE_NAME,
  })
  implements OtpResolverModel {}
