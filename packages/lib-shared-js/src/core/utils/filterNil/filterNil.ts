import {
  type FilterNilModel,
  type FilterNilParamsModel,
} from '@lib/shared/core/utils/filterNil/filterNil.models';

export const filterNil = <TType extends unknown>(
  params?: FilterNilParamsModel<TType>,
): FilterNilModel<TType> => params?.filter(Boolean) as FilterNilModel<TType>;
