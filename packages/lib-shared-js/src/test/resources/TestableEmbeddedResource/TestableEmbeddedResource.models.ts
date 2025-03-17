import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableResourceModel } from '@lib/shared/test/resources/TestableResource/TestableResource.models';

export type TestableEmbeddedResourceModel = TestableResourceModel & {
  rootEmbedded: RefFieldModel<TestableEntityResourceModel>;
};

export type TestableEmbeddedResourceFormModel =
  EntityResourceDataModel<TestableEmbeddedResourceModel>;
