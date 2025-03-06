import { type PartialModel } from '@lib/shared/core/core.models';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { trueTypeOf } from '@lib/shared/core/utils/trueTypeOf/trueTypeOf';
import {
  type ExpandFilterModel,
  type ExpandFilterParamsModel,
} from '@lib/shared/resource/utils/expandFilter/expandFilter.models';
import { type FilterModel } from '@lib/shared/resource/utils/Filter/Filter.models';

export const expandFilter = <TType extends unknown>(
  params?: ExpandFilterParamsModel<TType>,
): ExpandFilterModel<TType> =>
  params?.map(({ condition, field, value }) => {
    const valueF = ((): Omit<FilterModel<TType>, 'condition' | 'field'> => {
      if (isArray(value)) {
        switch (trueTypeOf(value[0])) {
          case 'String':
            return { stringArrayValue: value as Array<string> };
          default:
            return { resourceArrayValue: value as Array<PartialModel<TType>> };
        }
      }
      switch (trueTypeOf(value)) {
        case 'Boolean':
          return { booleanValue: value as boolean };
        case 'Date':
          return { dateValue: value as Date };
        case 'Number':
          return { numberValue: value as number };
        case 'String':
          return { stringValue: value as string };
        default:
          return { resourceValue: value as PartialModel<TType> };
      }
    })();
    return { ...valueF, condition, field };
  }) ?? [];
