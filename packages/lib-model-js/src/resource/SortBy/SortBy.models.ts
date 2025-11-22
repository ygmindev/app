import { type StringKeyModel } from '@lib/shared/core/core.models';

export type SortByModel<TType extends unknown> = {
  key: StringKeyModel<TType>;

  order?: boolean;
};
