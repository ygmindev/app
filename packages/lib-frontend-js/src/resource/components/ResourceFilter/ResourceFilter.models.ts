import { type ResourceFieldModel } from '@lib/frontend/resource/resource.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export type ResourceFilterPropsModel<TType, TKey extends StringKeyModel<TType>> = {
  field: ResourceFieldModel<TType, TKey>;
  onSubmit(filters?: Record<StringKeyModel<TType>, Array<FilterModel<TType>>>): Promise<void>;
  values?: Array<FilterModel<TType>>;
};
