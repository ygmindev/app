import { TESTABLE_ENTITY_RESOURCE_SEED_DATA } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resource.models';

export const TESTABLE_RELATED_RESOURCE_SEED_DATA: Array<
  EntityResourceDataModel<TestableRelatedResourceModel>
> = TESTABLE_ENTITY_RESOURCE_SEED_DATA;
