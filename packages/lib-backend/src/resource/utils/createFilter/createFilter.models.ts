import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export type CreateFilterParamsModel<TType> = {
  Resource(): ResourceClassModel<TType>;
  name: string;
};

export type CreateFilterModel<TType> = ResourceClassModel<FilterModel<TType>>;
