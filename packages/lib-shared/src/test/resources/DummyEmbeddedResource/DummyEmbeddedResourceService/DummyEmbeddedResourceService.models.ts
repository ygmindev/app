import { type EmbeddedResourceServiceModel } from '#lib-shared/resource/services/EmbeddedResourceService/EmbeddedResourceService.models';
import {
  type DummyEmbeddedResourceFormModel,
  type DummyEmbeddedResourceModel,
} from '#lib-shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';
import { type DummyEntityResourceModel } from '#lib-shared/test/resources/DummyEntityResource/DummyEntityResource.models';

export type DummyEmbeddedResourceServiceModel = EmbeddedResourceServiceModel<
  DummyEmbeddedResourceModel,
  DummyEmbeddedResourceFormModel,
  DummyEntityResourceModel
>;
