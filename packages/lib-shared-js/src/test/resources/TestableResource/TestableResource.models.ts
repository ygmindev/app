import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type TestableResourceModel = EntityResourceModel & {
  date?: Date;

  group: string;

  index: number;

  number?: number;

  string: string;

  stringArray?: Array<string>;

  stringOptional?: string;
};
