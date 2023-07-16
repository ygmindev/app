import { type DummyEmbeddedResourceServiceModel } from '#lib-shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService.models';

export type TestEmbeddedResourceServiceParamsModel = {
  getService(): TestableEmbeddedResourceServiceModel;
};

export type TestableEmbeddedResourceServiceModel = DummyEmbeddedResourceServiceModel;
