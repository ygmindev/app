import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

export const TESTABLE_RELATED_RESOURCE_RESOURCE_PARAMS = {
  fields: [],
  name: 'relatedOneToMany',
} satisfies ResourceParamsModel<TestableRelatedResourceModel, TestableEntityResourceModel>;
