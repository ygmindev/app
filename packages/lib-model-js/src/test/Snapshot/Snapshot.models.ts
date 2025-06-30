import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export type SnapshotModel = EntityResourceModel & {
  images?: Array<string>;

  name: string;
};
