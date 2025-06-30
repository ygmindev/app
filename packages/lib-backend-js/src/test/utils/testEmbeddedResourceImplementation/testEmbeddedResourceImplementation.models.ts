import { type TestResourceImplementationParamsModel } from '@lib/backend/test/utils/testResourceImplementation/testResourceImplementation.models';
import { type TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';

export type TestEmbeddedResourceImplementationParamsModel = TestResourceImplementationParamsModel<
  TestableEmbeddedResourceModel,
  TestableEntityResourceModel
>;
