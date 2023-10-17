import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '#lib-shared/test/resources/TestableEntityResource/TestableEntityResource.models';

export type TestResourceServiceParamsModel = {
  before?(
    params: EntityResourceServiceModel<
      TestableEntityResourceModel,
      TestableEntityResourceFormModel
    >,
  ): Promise<void>;
  form: TestableEntityResourceFormModel;
  getService(): EntityResourceServiceModel<
    TestableEntityResourceModel,
    TestableEntityResourceFormModel
  >;
};

export type TestableResourceServiceModel = EntityResourceServiceModel<
  TestableEntityResourceModel,
  TestableEntityResourceFormModel
>;
