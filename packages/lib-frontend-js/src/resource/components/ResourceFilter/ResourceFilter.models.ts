import { type ResourceFieldModel } from '@lib/frontend/resource/resource.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';

export type ResourceFilterPropsModel<TType, TKey extends StringKeyModel<TType>> = {
  field: ResourceFieldModel<TType, TKey>;
};
