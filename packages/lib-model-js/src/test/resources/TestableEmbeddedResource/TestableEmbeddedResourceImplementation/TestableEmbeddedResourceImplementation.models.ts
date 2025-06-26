import { type EmbeddedResourceImplementationModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResourceImplementation/EmbeddedResourceImplementation.models';
import { type TestableEmbeddedResourceModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';

export type TestableEmbeddedResourceImplementationModel = EmbeddedResourceImplementationModel<
  TestableEmbeddedResourceModel,
  TestableEntityResourceModel
>;
