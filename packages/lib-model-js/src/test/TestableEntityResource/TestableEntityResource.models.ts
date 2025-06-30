import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';
import { type TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';

export type TestableEntityResourceModel = TestableResourceModel & {
  embedded?: Array<TestableEmbeddedResourceModel>;

  relatedManyToMany?: CollectionModel<TestableRelatedResourceModel>;

  relatedOneToMany?: CollectionModel<TestableRelatedResourceModel>;
};
