import { type TestableEntityResourceServiceModel } from '#lib-shared/test/resources/TestableEntityResource/TestableEntityResourceService/TestableEntityResourceService.models';

export type TestResourceServiceParamsModel = {
  before?(params: TestableResourceServiceModel): Promise<void>;
  getService(): TestableResourceServiceModel;
};

export type TestableResourceServiceModel = TestableEntityResourceServiceModel;
