import { type TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { type TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type TestableEntityResourceModel = TestableResourceModel & {
  embedded?: PartialArrayModel<TestableEmbeddedResourceModel>;

  relatedManyToMany?: PartialArrayModel<TestableRelatedResourceModel>;

  relatedOneToMany?: PartialArrayModel<TestableRelatedResourceModel>;
};
