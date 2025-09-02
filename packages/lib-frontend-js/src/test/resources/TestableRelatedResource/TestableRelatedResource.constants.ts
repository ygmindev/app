import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';

export const TESTABLE_RELATED_RESOURCE_RESOURCE_PARAMS = {
  fields: [],
  name: 'relatedOneToMany',
} satisfies ResourceParamsModel<TestableRelatedResourceModel>;
