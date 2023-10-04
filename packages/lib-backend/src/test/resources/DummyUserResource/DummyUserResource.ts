import { OTP_EXPIRATION_SECONDS } from '#lib-backend/auth/resources/Otp/Otp.constants';
import { ProtectedResource } from '#lib-backend/auth/resources/ProtectedResource/ProtectedResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { DUMMY_USER_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyUserResource/DummyUserResource.constants';
import { type DummyUserResourceModel } from '#lib-shared/test/resources/DummyUserResource/DummyUserResource.models';

@withEntity({ isRepository: true, name: DUMMY_USER_RESOURCE_RESOURCE_NAME })
export class DummyUserResource extends ProtectedResource implements DummyUserResourceModel {
  @withField({
    defaultValue: () => new Date(),
    expire: OTP_EXPIRATION_SECONDS,
    isOptional: true,
    isRepository: true,
    type: DATA_TYPE.DATE,
  })
  dateTtlProperty?: Date;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.NUMBER })
  numberProperty?: number;

  @withField({ isArray: true, isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  stringArrayProperty?: Array<string>;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  stringProperty!: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  stringPropertyOptional?: string;
}
