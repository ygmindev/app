import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type ResourceManyModel<TType> = {
  result: PartialArrayModel<TType>;
};
