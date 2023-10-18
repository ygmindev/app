import { type TestableEmbeddedResourceServiceModel } from '#lib-shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResourceService/TestableEmbeddedResourceService.models';
import { type TestableEntityResourceFormModel } from '#lib-shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableEntityResourceServiceModel } from '#lib-shared/test/resources/TestableEntityResource/TestableEntityResourceService/TestableEntityResourceService.models';

export type TestResourceServiceParamsModel = {
  before?(params: TestableResourceServiceModel): Promise<void>;
  form: TestableEntityResourceFormModel;
  getService(): TestableResourceServiceModel;
};

export type TestableResourceServiceModel =
  | TestableEntityResourceServiceModel
  | TestableEmbeddedResourceServiceModel;
