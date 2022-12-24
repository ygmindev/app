import type { EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import type { EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants';
import type { DummyEntityResourceModel } from '@lib/shared/test/resources/DummyEntityResource/DummyEntityResource.models';

export interface DummyEmbeddedResourceModel
  extends EmbeddedResourceModel,
    Omit<DummyEntityResourceModel, typeof DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME> {}

export interface DummyEmbeddedResourceFormModel
  extends EntityResourceDataModel<DummyEmbeddedResourceModel> {}
