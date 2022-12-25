import type {
  EntityResourceDataModel,
  EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import type { DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.constants';
import type { DummyEmbeddedResourceModel } from '@lib/shared/test/resources/DummyEmbeddedResource/DummyEmbeddedResource.models';

export interface DummyEntityResourceModel extends EntityResourceModel {
  [DUMMY_EMBEDDED_RESOURCE_RESOURCE_NAME]?: Array<DummyEmbeddedResourceModel>;

  dateTtlProperty?: Date;

  numberProperty?: number;

  stringArrayProperty?: Array<string>;

  stringProperty: string;

  stringPropertyOptional?: string;
}

export interface DummyEntityResourceFormModel
  extends EntityResourceDataModel<DummyEntityResourceModel> {}