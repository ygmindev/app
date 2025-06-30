import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableResourceModel } from '@lib/shared/test/resources/TestableResource/TestableResource.models';

export type TestableRelatedResourceModel = TestableResourceModel & {
  rootManyToMany?: CollectionModel<TestableEntityResourceModel>;

  rootOneToMany?: RefFieldModel<TestableEntityResourceModel>;
};
