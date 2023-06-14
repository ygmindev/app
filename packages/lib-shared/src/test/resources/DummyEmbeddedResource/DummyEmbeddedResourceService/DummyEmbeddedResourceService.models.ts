import type { EmbeddedResourceServiceModel } from '#lib-shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import type {
  DummyEmbeddedResourceFormModel,
  DummyEmbeddedResourceModel,
} from '#lib-shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';
import type { DummyEntityResourceModel } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';

export interface DummyEmbeddedResourceServiceModel
  extends EmbeddedResourceServiceModel<
    DummyEmbeddedResourceModel,
    DummyEmbeddedResourceFormModel,
    DummyEntityResourceModel
  > {}
