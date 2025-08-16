import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';

export type SecurityModel = SourcedEntityResourceModel & {
  description?: string;
};
