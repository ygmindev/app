import { OTP_EXPIRATION_SECONDS } from '@lib/backend/auth/resources/Otp/Otp.constants';
import { withAccess } from '@lib/backend/resource/decorators/withAccess/withAccess';
import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { OTP_RESOURCE_NAME } from '@lib/shared/auth/resources/Otp/Otp.constants';
import type { OtpFormModel, OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';

@withEntity({ name: `${OTP_RESOURCE_NAME}Form` })
export class OtpForm implements OtpFormModel {
  @withField({ isUnique: true })
  username!: string;
}

@withEntity({ isRepository: true, name: OTP_RESOURCE_NAME })
export class Otp extends EntityResource implements OtpModel {
  @withField({ isUnique: true })
  username!: string;

  @withField({ expire: OTP_EXPIRATION_SECONDS })
  declare created: Date;

  @withAccess({ level: ACCESS_LEVEL.PROHIBITED })
  @withField()
  otp!: string;
}
