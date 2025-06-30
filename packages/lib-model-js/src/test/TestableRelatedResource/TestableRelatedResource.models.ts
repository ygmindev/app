import { type CollectionModel } from '@lib/model/core/Collection/Collection.models';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { type TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';

export type TestableRelatedResourceModel = TestableResourceModel & {
  rootManyToMany?: CollectionModel<TestableEntityResourceModel>;

  rootOneToMany?: TestableEntityResourceModel;
};
