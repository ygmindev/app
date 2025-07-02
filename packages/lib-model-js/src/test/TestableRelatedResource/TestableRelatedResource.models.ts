import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { type TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';

export type TestableRelatedResourceModel = TestableResourceModel & {
  rootManyToMany?: CollectionModel<TestableEntityResourceModel>;

  rootOneToMany?: RefModel<TestableEntityResourceModel>;
};
