import { OTP_EXPIRATION_SECONDS } from '#lib-backend/auth/resources/Otp/Otp.constants';
import { withEntity } from '#lib-backend/resource/decorators/withEntity/withEntity';
import { withField } from '#lib-backend/resource/decorators/withField/withField';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { DummyEmbeddedResource } from '#lib-backend/test/resources/DummyEmbeddedResource/DummyEmbeddedResource';
import { FIELD_TYPE } from '#lib-shared/form/form.constants';
import { DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants';
import { type DummyEmbeddedResourceModel } from '#lib-shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.constants';
import { type DummyEntityResourceModel } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';

@withEntity({ base: EntityResource, isRepository: true, name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME })
export class DummyEntityResource extends EntityResource implements DummyEntityResourceModel {
  @withField({
    Resource: DummyEmbeddedResource,
    isArray: true,
    isOptional: true,
    isRepository: true,
  })
  [DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME]?: Array<DummyEmbeddedResourceModel>;

  @withField({ isOptional: true, isRepository: true, type: FIELD_TYPE.NUMBER })
  numberProperty?: number;

  @withField({ isArray: true, isOptional: true, isRepository: true, type: FIELD_TYPE.STRING })
  stringArrayProperty?: Array<string>;

  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  stringProperty!: string;

  @withField({ isOptional: true, isRepository: true, type: FIELD_TYPE.STRING })
  stringPropertyOptional?: string;

  @withField({
    defaultValue: () => new Date(),
    expire: OTP_EXPIRATION_SECONDS,
    isOptional: true,
    isRepository: true,
    type: FIELD_TYPE.DATE,
  })
  dateTtlProperty?: Date;
}
