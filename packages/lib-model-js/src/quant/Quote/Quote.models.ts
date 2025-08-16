import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';

export type QuoteModel = SourcedEntityResourceModel & {
  value?: number;
};
