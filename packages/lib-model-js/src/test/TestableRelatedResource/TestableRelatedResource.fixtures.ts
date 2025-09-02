import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export const TESTABLE_RELATED_RESOURCE_SEED_DATA: PartialArrayModel<TestableRelatedResourceModel> =
  TESTABLE_ENTITY_RESOURCE_SEED_DATA;
