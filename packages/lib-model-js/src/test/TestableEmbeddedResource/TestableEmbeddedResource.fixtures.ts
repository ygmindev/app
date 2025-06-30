import { type TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { type EntityResourceDataModel } from '@lib/shared/resource/resource.models';

export const TESTABLE_EMBEDDED_RESOURCE_SEED_DATA: Array<
  EntityResourceDataModel<TestableEmbeddedResourceModel>
> = TESTABLE_ENTITY_RESOURCE_SEED_DATA;
