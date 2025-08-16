import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';

export type AssetModel = SourcedEntityResourceModel & {
  description?: string;
};
