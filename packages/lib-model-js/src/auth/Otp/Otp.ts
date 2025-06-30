import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATABASE_CONFIG } from '@lib/config/database/database.constants';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { OTP_RESOURCE_NAME } from '@lib/model/auth/Otp/Otp.constants';
import { type OtpModel } from '@lib/model/auth/Otp/Otp.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({
  indices: [{ keys: ['email', 'phone'], type: 'text' }],
  isDatabase: true,
  name: OTP_RESOURCE_NAME,
})
export class Otp extends EntityResource implements OtpModel {
  @withField({
    Resource: () => Date,
    defaultValue: () => new Date(),
    expire: DATABASE_CONFIG.expireSeconds,
    isDatabase: true,
  })
  created!: Date;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  callingCode?: string;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  email?: string;

  @withField({ type: DATA_TYPE.BOOLEAN })
  isCheckExists?: boolean;

  @withAccess({ access: ACCESS_LEVEL.RESTRICTED })
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  otp?: string;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  phone?: string;
}
