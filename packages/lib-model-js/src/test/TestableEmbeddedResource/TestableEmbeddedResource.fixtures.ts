import { type TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export const TESTABLE_EMBEDDED_RESOURCE_SEED_DATA: PartialArrayModel<TestableEmbeddedResourceModel> =
  TESTABLE_ENTITY_RESOURCE_SEED_DATA;
