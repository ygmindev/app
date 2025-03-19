import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type TestableResourceModel } from '@lib/shared/test/resources/TestableResource/TestableResource.models';

export type TestableEmbeddedResourceModel = TestableResourceModel & {};

export type TestableEmbeddedResourceFormModel =
  EntityResourceDataModel<TestableEmbeddedResourceModel>;
