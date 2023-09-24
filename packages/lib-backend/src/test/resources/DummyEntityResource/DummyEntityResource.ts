import { OTP_EXPIRATION_SECONDS } from '#lib-backend/auth/resources/Otp/Otp.constants';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { DATA_TYPE } from '#lib-shared/data/data.constants';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import { type DummyEntityResourceModel } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';

@withEntity({ isRepository: true, name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME })
export class DummyEntityResource extends EntityResource implements DummyEntityResourceModel {
  // @withField({
  //   Resource: () => DummyEmbeddedResource,
  //   isArray: true,
  //   isOptional: true,
  //   isRepository: true,
  //   type: PROPERTY_TYPE.RESOURCE,
  // })
  // [DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME]?: Array<DummyEmbeddedResourceModel>;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.NUMBER })
  numberProperty?: number;

  @withField({ isArray: true, isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  stringArrayProperty?: Array<string>;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  stringProperty!: string;

  @withField({ isOptional: true, isRepository: true, type: DATA_TYPE.STRING })
  stringPropertyOptional?: string;

  @withField({
    defaultValue: () => new Date(),
    expire: OTP_EXPIRATION_SECONDS,
    isOptional: true,
    isRepository: true,
    type: DATA_TYPE.DATE,
  })
  dateTtlProperty?: Date;
}
