import { type EmbeddedResourceImplementationModel } from '@lib/model/resource/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';
import { type TestableEmbeddedResourceModel } from '@lib/model/test/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableEntityResourceModel } from '@lib/model/test/TestableEntityResource/TestableEntityResource.models';

export type TestableEmbeddedResourceImplementationModel = EmbeddedResourceImplementationModel<
  TestableEmbeddedResourceModel,
  TestableEntityResourceModel
>;
