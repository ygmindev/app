import { type EmbeddedResourceServiceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceService/EmbeddedResourceService.models';
import {
  type TestableEmbeddedResourceFormModel,
  type TestableEmbeddedResourceModel,
} from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';

export type TestableEmbeddedResourceServiceModel = EmbeddedResourceServiceModel<
  TestableEmbeddedResourceModel,
  TestableEmbeddedResourceFormModel,
  TestableEntityResourceModel
>;
