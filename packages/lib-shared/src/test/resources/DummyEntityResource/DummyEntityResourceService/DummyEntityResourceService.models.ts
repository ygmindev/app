import { type EntityResourceServiceModel } from '#lib-shared/resource/services/EntityResourceService/EntityResourceService.models';
import {
  type DummyEntityResourceFormModel,
  type DummyEntityResourceModel,
} from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';

export type DummyEntityResourceServiceModel = EntityResourceServiceModel<
  DummyEntityResourceModel,
  DummyEntityResourceFormModel
>;
