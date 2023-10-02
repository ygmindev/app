import { type EntityResourceModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export type TestableResourceModel = EntityResourceModel & {
  dateTtlProperty?: Date;

  numberProperty?: number;

  stringArrayProperty?: Array<string>;

  stringProperty: string;

  stringPropertyOptional?: string;
};
