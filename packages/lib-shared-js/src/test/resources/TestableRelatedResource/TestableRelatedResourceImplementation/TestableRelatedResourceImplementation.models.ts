import { type RelatedResourceImplementationModel } from '@lib/shared/resource/resources/RelatedResource/RelatedResourceImplementation/RelatedResourceImplementation.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import {
  type TestableRelatedResourceFormModel,
  type TestableRelatedResourceModel,
} from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

export type TestableRelatedResourceImplementationModel = RelatedResourceImplementationModel<
  TestableRelatedResourceModel,
  TestableRelatedResourceFormModel,
  TestableEntityResourceModel
>;
