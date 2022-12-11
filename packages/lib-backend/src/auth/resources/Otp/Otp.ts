import { OTP_EXPIRATION_SECONDS } from '@lib/backend/auth/resources/Otp/Otp.constants';
import { withAccess } from '@lib/backend/resource/decorators/withAccess/withAccess';
import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { OTP_RESOURCE_NAME } from '@lib/shared/auth/resources/Otp/Otp.constants';
import type { OtpFormModel, OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { FIELD_TYPE } from '@lib/shared/form/form.constants';

@withEntity({ name: `${OTP_RESOURCE_NAME}Form` })
export class OtpForm implements OtpFormModel {
  @withField({ isRepository: true, isUnique: true })
  username!: string;
}

@withEntity({ isRepository: true, name: OTP_RESOURCE_NAME })
export class Otp extends EntityResource implements OtpModel {
  @withField({ isRepository: true, isUnique: true })
  username!: string;

  @withField({
    defaultValue: () => new Date(),
    expire: OTP_EXPIRATION_SECONDS,
    isRepository: true,
    type: FIELD_TYPE.DATE,
  })
  declare created: Date;

  @withAccess({ level: ACCESS_LEVEL.PROHIBITED })
  @withField({ isRepository: true })
  otp!: string;
}
