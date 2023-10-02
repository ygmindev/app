import { type DummyEntityResourceServiceModel } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService.models';
import { type DummyUserResourceServiceModel } from '#lib-shared/test/resources/DummyUserResource/DummyUserResourceService/DummyUserResourceService.models';

export type TestResourceServiceParamsModel = {
  before?(params: TestableResourceServiceModel): Promise<void>;
  getService(): TestableResourceServiceModel;
};

export type TestableResourceServiceModel =
  | DummyEntityResourceServiceModel
  | DummyUserResourceServiceModel;
