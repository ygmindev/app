import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { OTP_RESOURCE_NAME } from '@lib/model/auth/Otp/Otp.constants';
import { type OtpModel } from '@lib/model/auth/Otp/Otp.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';

@withDatabaseEntity({
  indices: [{ keys: ['email', 'phone'], type: 'text' }],
  name: OTP_RESOURCE_NAME,
})
export class Otp extends EntityResource implements OtpModel {
  @withDatabaseField({ isOptional: true })
  callingCode?: string;

  @withDatabaseField({
    Resource: () => Date,
    expire: DATABASE_CONFIG.expireSeconds,
  })
  created: Date = new Date();

  @withDatabaseField({ isOptional: true })
  email?: string;

  @withDatabaseField({ isOptional: true })
  isCheckExists?: boolean;

  @withAccess({ access: ACCESS_LEVEL.RESTRICTED })
  @withDatabaseField({ isOptional: true })
  otp?: string;

  @withDatabaseField({ isOptional: true })
  phone?: string;
}

export default Otp;
