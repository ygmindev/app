import { OTP_EXPIRATION_SECONDS } from '#lib-backend/auth/resources/Otp/Otp.constants';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { type TestableResourceModel } from '#lib-shared/test/resources/TestableResource/TestableResource.models';

@withEntity({ isAbstract: true })
export class TestableResource extends EntityResource implements TestableResourceModel {
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
