import { type EntityResourceDataModel } from '@lib/model/core/EntityResource/EntityResource.models';
import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.fixtures';
import { type TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

export const TESTABLE_RELATED_RESOURCE_SEED_DATA: Array<
  EntityResourceDataModel<TestableRelatedResourceModel>
> = TESTABLE_ENTITY_RESOURCE_SEED_DATA;
