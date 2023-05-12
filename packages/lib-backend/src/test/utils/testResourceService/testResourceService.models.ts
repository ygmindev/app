import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { DummyEmbeddedResourceServiceModel } from '@lib/shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService.models';
import type { DummyEntityResourceServiceModel } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService.models';

export interface TestResourceServiceParamsModel {
  before?(params: TestableResourceServiceModel): Promise<void>;
  getService: CallablePromiseModel<TestableResourceServiceModel>;
}

export type TestableResourceServiceModel =
  | DummyEntityResourceServiceModel
  | DummyEmbeddedResourceServiceModel;
