import type { CallablePromiseModel } from '#lib-shared/core/core.models';
import type { DummyEmbeddedResourceServiceModel } from '#lib-shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService.models';

export type TestEmbeddedResourceServiceParamsModel = {
  getService: CallablePromiseModel<TestableEmbeddedResourceServiceModel>;
};

export type TestableEmbeddedResourceServiceModel = DummyEmbeddedResourceServiceModel;
