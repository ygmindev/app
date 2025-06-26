import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type TestableEmbeddedResourceModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.fixtures';

export const TESTABLE_EMBEDDED_RESOURCE_SEED_DATA: Array<
  EntityResourceDataModel<TestableEmbeddedResourceModel>
> = TESTABLE_ENTITY_RESOURCE_SEED_DATA;
