import { type EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import {
  type TestableEntityResourceFormModel,
  type TestableEntityResourceModel,
} from '#lib-shared/test/resources/TestableEntityResource/TestableEntityResource.models';

export type TestableEntityResourceServiceModel = EntityResourceServiceModel<
  TestableEntityResourceModel,
  TestableEntityResourceFormModel
>;
