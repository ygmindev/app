import { type TestResourceImplementationParamsModel } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

export type TestRelatedResourceImplementationParamsModel = TestResourceImplementationParamsModel<
  TestableRelatedResourceModel,
  TestableEntityResourceModel
>;
