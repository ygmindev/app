import { OTP_EXPIRATION_SECONDS } from '@lib/backend/auth/resources/Otp/Otp.constants';
import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { FIELD_TYPE } from '@lib/shared/form/form.constants';
import { DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants';
import type { DummyEmbeddedResourceModel } from '@lib/shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';

@withEntity({ isEmbedded: true, isRepository: true, name: DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME })
export class DummyEmbeddedResource extends EmbeddedResource implements DummyEmbeddedResourceModel {
  @withField({ isOptional: true, isRepository: true })
  numberProperty?: number;

  @withField({ isArray: true, isOptional: true, isRepository: true, type: FIELD_TYPE.STRING })
  stringArrayProperty?: Array<string>;

  @withField({ isRepository: true })
  stringProperty!: string;

  @withField({ isOptional: true, isRepository: true })
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
