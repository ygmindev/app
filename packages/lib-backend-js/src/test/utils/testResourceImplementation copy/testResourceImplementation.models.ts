import { type TestableEntityResourceImplementationModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResourceImplementation/TestableEntityResourceImplementation.models';

export type TestResourceImplementationParamsModel = {
  before?(params: TestableResourceImplementationModel): Promise<void>;
  getImplementation(): TestableResourceImplementationModel;
};

export type TestableResourceImplementationModel = TestableEntityResourceImplementationModel;
