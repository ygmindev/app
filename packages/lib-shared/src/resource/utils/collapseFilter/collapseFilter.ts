import { type PartialModel } from '#lib-shared/core/core.models';
import { trueTypeOf } from '#lib-shared/core/utils/trueTypeOf/trueTypeOf';
import {
  type CollapseFilterModel,
  type CollapseFilterParamsModel,
} from '#lib-shared/resource/utils/collapseFilter/collapseFilter.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const collapseFilter = <TType>(
  params: CollapseFilterParamsModel<TType>,
): CollapseFilterModel<TType> =>
  params.map(({ condition, field, value }) => {
    const valueF = ((): Omit<FilterModel<TType>, 'condition' | 'field'> => {
      switch (trueTypeOf(value)) {
        case 'boolean':
          return { booleanValue: value as boolean };
        case 'date':
          return { dateValue: value as Date };
        case 'number':
          return { numberValue: value as number };
        case 'string':
          return { stringValue: value as string };
        default:
          return { resourceValue: value as PartialModel<TType> };
      }
    })();
    return { ...valueF, condition, field };
  });
