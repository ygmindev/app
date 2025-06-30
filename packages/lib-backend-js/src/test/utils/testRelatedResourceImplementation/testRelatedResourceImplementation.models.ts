import { type TestResourceImplementationParamsModel } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation.models';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';

export type TestRelatedResourceImplementationParamsModel = TestResourceImplementationParamsModel<
  TestableRelatedResourceModel,
  TestableEntityResourceModel
>;
