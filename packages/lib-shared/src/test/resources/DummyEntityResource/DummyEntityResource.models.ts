import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type DummyEntityResourceModel = EntityResourceModel & {
  dateTtlProperty?: Date;

  numberProperty?: number;

  stringArrayProperty?: Array<string>;

  stringProperty: string;

  stringPropertyOptional?: string;
};

export type DummyEntityResourceFormModel = EntityResourceDataModel<DummyEntityResourceModel>;
