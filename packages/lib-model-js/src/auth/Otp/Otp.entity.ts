import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { OTP_RESOURCE_NAME } from '@lib/model/auth/Otp/Otp.constants';
import { type OtpModel } from '@lib/model/auth/Otp/Otp.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';

@withEntity({
  indices: [{ keys: ['email', 'phone'], type: 'text' }],
  isDatabase: true,
  name: OTP_RESOURCE_NAME,
})
export class Otp extends EntityResource implements OtpModel {
  @withField({ isDatabase: true, isOptional: true })
  callingCode?: string;

  @withField({
    Resource: () => Date,
    defaultValue: () => new Date(),
    expire: DATABASE_CONFIG.expireSeconds,
    isDatabase: true,
  })
  created!: Date;

  @withField({ isDatabase: true, isOptional: true })
  email?: string;

  @withField({ isOptional: true })
  isCheckExists?: boolean;

  @withAccess({ access: ACCESS_LEVEL.RESTRICTED })
  @withField({ isDatabase: true, isOptional: true })
  otp?: string;

  @withField({ isDatabase: true, isOptional: true })
  phone?: string;
}

export default Otp;
