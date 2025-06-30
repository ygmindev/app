import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type TestableResourceModel = EntityResourceModel & {
  date?: Date;

  group: string;

  index: number;

  number?: number;

  string: string;

  stringArray?: Array<string>;

  stringOptional?: string;
};
