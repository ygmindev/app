import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { type TestableResourceModel } from '@lib/model/test/TestableResource/TestableResource.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type TestableRelatedResourceModel = TestableResourceModel & {
  rootManyToMany?: PartialArrayModel<TestableEntityResourceModel>;

  rootManyToOne?: RefModel<TestableEntityResourceModel>;
};
