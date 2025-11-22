import { type ResourceFieldModel } from '@lib/frontend/resource/resource.models';
import { type FilterModel } from '@lib/model/resource/Filter/Filter.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';

export type ResourceFilterPropsModel<TType, TKey extends StringKeyModel<TType>> = {
  field: ResourceFieldModel<TType, TKey>;
  onSubmit(filters?: Record<StringKeyModel<TType>, Array<FilterModel<TType>>>): Promise<void>;
  values?: Array<FilterModel<TType>>;
};
