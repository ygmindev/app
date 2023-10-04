import { type DummyEntityResourceServiceModel } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService.models';

export type TestResourceServiceParamsModel = {
  before?(params: TestableResourceServiceModel): Promise<void>;
  getService(): TestableResourceServiceModel;
};

export type TestableResourceServiceModel = DummyEntityResourceServiceModel;
