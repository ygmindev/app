import { type PartialModel } from '@lib/shared/core/core.models';

export type ResourceManyModel<TType> = {
  result: Array<PartialModel<TType>>;
};
