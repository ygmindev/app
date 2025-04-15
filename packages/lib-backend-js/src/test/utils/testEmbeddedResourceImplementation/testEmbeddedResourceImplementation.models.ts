import { type TestResourceImplementationParamsModel } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation.models';
import { type TestableEmbeddedResourceModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';

export type TestEmbeddedResourceImplementationParamsModel = TestResourceImplementationParamsModel<
  TestableEmbeddedResourceModel,
  TestableEntityResourceModel
>;
