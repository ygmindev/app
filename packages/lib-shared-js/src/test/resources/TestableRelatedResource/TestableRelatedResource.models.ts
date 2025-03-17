import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableResourceModel } from '@lib/shared/test/resources/TestableResource/TestableResource.models';

export type TestableRelatedResourceModel = TestableResourceModel & {
  rootManyToMany?: CollectionModel<TestableEntityResourceModel>;

  rootOneToMany?: RefFieldModel<TestableEntityResourceModel>;
};

export type TestableRelatedResourceFormModel =
  EntityResourceDataModel<TestableRelatedResourceModel>;
