import { type TestableEmbeddedResourceImplementationModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResourceImplementation/TestableEmbeddedResourceImplementation.models';
import { type TestableEntityResourceFormModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableEntityResourceImplementationModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation.models';

export type TestResourceImplementationParamsModel = {
  before?(params: TestableResourceImplementationModel): Promise<void>;
  form: TestableEntityResourceFormModel;
  getImplementation(): TestableResourceImplementationModel;
};

export type TestableResourceImplementationModel =
  | TestableEntityResourceImplementationModel
  | TestableEmbeddedResourceImplementationModel;
