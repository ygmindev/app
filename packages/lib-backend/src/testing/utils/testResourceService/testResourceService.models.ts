import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import type { DummyEmbeddedResourceServiceModel } from '@lib/shared/testing/resources/DummyEmbeddedResource/DummyEmbeddedResourceService/DummyEmbeddedResourceService.models';
import type { DummyEntityResourceServiceModel } from '@lib/shared/testing/resources/DummyEntityResource/DummyEntityResourceService/DummyEntityResourceService.models';

export interface TestResourceServiceParamsModel {
  before?: CallablePromiseModel;
  service: DummyEntityResourceServiceModel | DummyEmbeddedResourceServiceModel;
}
