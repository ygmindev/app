import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type TestableEmbeddedResourceModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';
import { type TestableResourceModel } from '@lib/shared/test/resources/TestableResource/TestableResource.models';

export type TestableEntityResourceModel = TestableResourceModel & {
  embedded?: CollectionModel<TestableEmbeddedResourceModel>;

  relatedManyToMany?: CollectionModel<TestableRelatedResourceModel>;

  relatedOneToMany?: CollectionModel<TestableRelatedResourceModel>;
};

export type TestableEntityResourceFormModel = EntityResourceDataModel<TestableEntityResourceModel>;
