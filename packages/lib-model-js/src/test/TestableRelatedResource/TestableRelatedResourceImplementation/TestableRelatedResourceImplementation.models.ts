import { type EntityResourceImplementationModel } from '@lib/model/resource/EntityResource/EntityResourceImplementation/EntityResourceImplementation.models';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';

export type TestableRelatedResourceImplementationModel =
  EntityResourceImplementationModel<TestableRelatedResourceModel>;

// import { type RelatedResourceImplementationModel } from '@lib/model/resource/RelatedResource/RelatedResourceImplementation/RelatedResourceImplementation.models';
// import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
// import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';

// export type TestableRelatedResourceImplementationModel = RelatedResourceImplementationModel<
//   TestableRelatedResourceModel,
//   TestableEntityResourceModel
// >;
