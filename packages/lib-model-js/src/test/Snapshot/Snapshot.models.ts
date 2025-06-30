import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type SnapshotModel = EntityResourceModel & {
  images?: Array<string>;

  name: string;
};
