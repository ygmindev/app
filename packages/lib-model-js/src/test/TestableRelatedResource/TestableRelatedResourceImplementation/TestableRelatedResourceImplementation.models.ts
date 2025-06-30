import { type RelatedResourceImplementationModel } from '@lib/model/resource/RelatedResource/RelatedResourceImplementation/RelatedResourceImplementation.models';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';

export type TestableRelatedResourceImplementationModel = RelatedResourceImplementationModel<
  TestableRelatedResourceModel,
  TestableEntityResourceModel
>;
