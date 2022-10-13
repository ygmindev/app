import { Otp, OtpForm } from '@lib/backend/auth/resources/Otp/Otp';
import { OtpService } from '@lib/backend/auth/resources/Otp/OtpService/OtpService';
import { withResolver } from '@lib/backend/graphql/decorators/withResolver/withResolver';
import { withInput } from '@lib/backend/resource/decorators/withInput/withInput';
import { withOutput } from '@lib/backend/resource/decorators/withOutput/withOutput';
import { EntityResourceResolver } from '@lib/backend/resource/resources/EntityResource/EntityResourceResolver/EntityResourceResolver';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import {
  OTP_CREATE_IF_DOES_NOT_EXIST,
  OTP_RESOURCE_NAME,
} from '@lib/shared/auth/resources/Otp/Otp.constants';
import type { OtpFormModel, OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { withContainer } from '@lib/shared/core/decorators/withContainer/withContainer';
import { withInject } from '@lib/shared/core/decorators/withInject/withInject';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

@withContainer()
@withResolver({ Resource: Otp })
export class OtpResolver extends EntityResourceResolver<OtpModel, OtpFormModel>({
  Resource: Otp,
  ResourceData: OtpForm,
  ResourceService: OtpService,
  createAccess: ACCESS_LEVEL.PUBLIC,
  name: OTP_RESOURCE_NAME,
}) {
  @withInject(OtpService) protected _otpService!: OtpService;

  @withOutput({
    Resource: Otp,
    level: ACCESS_LEVEL.PUBLIC,
    method: RESOURCE_METHOD_TYPE.CREATE,
    name: OTP_CREATE_IF_DOES_NOT_EXIST,
  })
  async create(
    @withInput({
      Resource: OtpForm,
      method: RESOURCE_METHOD_TYPE.CREATE,
      name: OTP_CREATE_IF_DOES_NOT_EXIST,
    })
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, OtpModel, OtpFormModel>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, OtpModel>> {
    return this._otpService.createIfNotExists(input);
  }
}
