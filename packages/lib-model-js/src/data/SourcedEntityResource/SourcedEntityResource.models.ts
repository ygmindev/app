import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type SourcedEntityResourceModel = EntityResourceModel & {
  source?: string;
};
