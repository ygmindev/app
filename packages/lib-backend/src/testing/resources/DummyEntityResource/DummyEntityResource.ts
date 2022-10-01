import { withEntity } from '@lib/backend/resource/decorators/withEntity/withEntity';
import { withField } from '@lib/backend/resource/decorators/withField/withField';
import { FIELD_TYPE } from '@lib/backend/resource/decorators/withField/withField.constants';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { DummyEmbeddedResource } from '@lib/backend/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource';
import { DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants';
import type { DummyEmbeddedResourceModel } from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';
import { DUMMY_ENTITY_RESOURCE_RESOURCE_NAME } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.constants';
import type { DummyEntityResourceModel } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResource.models';

@withEntity({ isRepository: true, name: DUMMY_ENTITY_RESOURCE_RESOURCE_NAME })
export class DummyEntityResource extends EntityResource implements DummyEntityResourceModel {
  @withField({ Resource: DummyEmbeddedResource, isArray: true, isOptional: true })
  [DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME]?: Array<DummyEmbeddedResourceModel>;

  @withField({ isOptional: true })
  numberProperty?: number;

  @withField({ isArray: true, isOptional: true, type: FIELD_TYPE.STRING })
  stringArrayProperty?: Array<string>;

  @withField()
  stringProperty!: string;

  @withField({ isOptional: true })
  stringPropertyOptional?: string;
}
