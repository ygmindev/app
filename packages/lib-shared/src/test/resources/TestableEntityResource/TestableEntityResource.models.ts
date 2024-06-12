import { type EmbeddableRootFieldModel } from '@lib/shared/resource/resource.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { type TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.constants';
import { type TestableEmbeddedResourceModel } from '@lib/shared/test/resources/TestableEmbeddedResource/TestableEmbeddedResource.models';

export type TestableEntityResourceModel = EntityResourceModel & {
  [TESTABLE_EMBEDDED_RESOURCE_RESOURCE_NAME]?: Array<
    EmbeddableRootFieldModel<TestableEmbeddedResourceModel>
  >;

  dateTtlField?: Date;

  numberField?: number;

  stringArrayField?: Array<string>;

  stringField: string;

  stringFieldOptional?: string;
};

export type TestableEntityResourceFormModel = EntityResourceDataModel<TestableEntityResourceModel>;
