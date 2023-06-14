import type { EntityResourceServiceModel } from '#lib-shared/resource/resources/EntityResource/EntityResourceService/EntityResourceService.models';
import type {
  DummyEntityResourceFormModel,
  DummyEntityResourceModel,
} from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';

export interface DummyEntityResourceServiceModel
  extends EntityResourceServiceModel<DummyEntityResourceModel, DummyEntityResourceFormModel> {}
