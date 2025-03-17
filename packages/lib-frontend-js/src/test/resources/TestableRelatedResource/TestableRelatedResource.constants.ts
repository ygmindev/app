import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/test/resources/Utility/Utility.constants';
import { TESTABLE_RELATED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.constants';
import { type TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

export const TESTABLE_RELATED_RESOURCE_RESOURCE_PARAMS = {
  fields: [],
  name: TESTABLE_RELATED_RESOURCE_RESOURCE_NAME,
} satisfies ResourceParamsModel<TestableRelatedResourceModel>;
