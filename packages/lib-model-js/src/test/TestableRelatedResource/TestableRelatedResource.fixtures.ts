import { FIXTURES as TESTABLE_ENTITY_RESOURCE_FIXTURES } from '@lib/model/test/TestableEntityResource/TestableEntityResource.fixtures';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export const FIXTURES: PartialArrayModel<TestableRelatedResourceModel> = [
  ...TESTABLE_ENTITY_RESOURCE_FIXTURES,
];
