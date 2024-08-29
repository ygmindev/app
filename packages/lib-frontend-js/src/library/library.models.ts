import { type PartialModel } from '@lib/shared/core/core.models';

export type LibraryVariantModel<TProps> = {
  category?: string;
  name?: string;
  props?: PartialModel<TProps>;
};
