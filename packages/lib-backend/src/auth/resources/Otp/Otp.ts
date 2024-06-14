import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { OTP_RESOURCE_NAME } from '@lib/shared/auth/resources/Otp/Otp.constants';
import { type OtpFormModel, type OtpModel } from '@lib/shared/auth/resources/Otp/Otp.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ name: `${OTP_RESOURCE_NAME}Form` })
export class OtpForm implements OtpFormModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  callingCode?: string;

  @withField({ type: DATA_TYPE.BOOLEAN })
  checkExists?: boolean;

  @withField({ isRepository: true, isUnique: true, type: DATA_TYPE.STRING })
  email?: string;

  @withField({ isRepository: true, isUnique: true, type: DATA_TYPE.STRING })
  phone?: string;
}

@withEntity({ indices: [['email'], ['phone']], isRepository: true, name: OTP_RESOURCE_NAME })
export class Otp extends EntityResource implements OtpModel {
  @withField({
    defaultValue: () => new Date(),
    expire: DATABASE_CONFIG.expireSeconds,
    isRepository: true,
    type: DATA_TYPE.DATE,
  })
  declare created: Date;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  callingCode?: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  email?: string;

  @withAccess({ level: ACCESS_LEVEL.RESTRICTED })
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  otp!: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  phone?: string;
}
