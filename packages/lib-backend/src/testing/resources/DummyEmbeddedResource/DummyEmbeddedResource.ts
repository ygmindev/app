import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { FIELD_TYPE } from '@lib/backend/resource/decorators/withField/withField.constants';
import { EmbeddedResource } from '@lib/backend/resource/resources/EmbeddedResource/EmbeddedResource';
import { DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants';
import type { DummyEmbeddedResourceModel } from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';

@withEntity({ isEmbedded: true, isRepository: true, name: DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME })
export class DummyEmbeddedResource extends EmbeddedResource implements DummyEmbeddedResourceModel {
  @withField({ isOptional: true })
  numberProperty?: number;

  @withField({ isArray: true, isOptional: true, type: FIELD_TYPE.STRING })
  stringArrayProperty?: Array<string>;

  @withField()
  stringProperty!: string;

  @withField({ isOptional: true })
  stringPropertyOptional?: string;
}
