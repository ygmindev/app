import { type EmbeddedResourceModel } from '@lib/shared/resource/resources/EmbeddedResource/EmbeddedResource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';

export type TestableEmbeddedResourceModel = EmbeddedResourceModel &
  Omit<TestableEntityResourceModel, typeof TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME>;

export type TestableEmbeddedResourceFormModel =
  EntityResourceDataModel<TestableEmbeddedResourceModel>;
