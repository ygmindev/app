import { type EntityResourceModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type SnapshotModel = EntityResourceModel & {
  images?: Array<string>;

  name: string;
};
