import { type CollectionModel } from '@lib/model/core/Collection/Collection.models';
import { type TestableEmbeddedResourceModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';
import { type TestableResourceModel } from '@lib/shared/test/resources/TestableResource/TestableResource.models';

export type TestableEntityResourceModel = TestableResourceModel & {
  embedded?: Array<TestableEmbeddedResourceModel>;

  relatedManyToMany?: CollectionModel<TestableRelatedResourceModel>;

  relatedOneToMany?: CollectionModel<TestableRelatedResourceModel>;
};
