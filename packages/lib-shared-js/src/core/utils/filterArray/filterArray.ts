import { FILTER_CONDITION } from '@lib/model/resource/Filter/Filter.constants';
import {
  type FilterArrayModel,
  type FilterArrayParamsModel,
} from '@lib/shared/core/utils/filterArray/filterArray.models';

export const filterArray = <TType extends unknown>(
  ...[values, filters, skip, take]: FilterArrayParamsModel<TType>
): FilterArrayModel<TType> => {
  let result = [...values];

  if (filters?.length) {
    result = result.filter((v) => {
      return filters.every((filter) => {
        const { condition, field, value } = filter;
        const fieldValue = (v as Record<string, unknown>)[field];
        switch (condition) {
          case FILTER_CONDITION.EQUAL:
            return fieldValue === value;
          case FILTER_CONDITION.NOT_EQUAL:
            return fieldValue !== value;
          case FILTER_CONDITION.GREATER_THAN:
            return (fieldValue as number) > (value as number);
          case FILTER_CONDITION.GRATER_THAN_EQUAL:
            return (fieldValue as number) >= (value as number);
          case FILTER_CONDITION.LESS_THAN:
            return (fieldValue as number) < (value as number);
          case FILTER_CONDITION.LESS_THAN_EQUAL:
            return (fieldValue as number) <= (value as number);
          case FILTER_CONDITION.IN:
            return Array.isArray(value) ? value.includes(fieldValue) : false;
          case FILTER_CONDITION.NOT_IN:
            return Array.isArray(value) ? !value.includes(fieldValue) : true;
          case FILTER_CONDITION.LIKE:
            if (typeof fieldValue === 'string' && typeof value === 'string') {
              return fieldValue.toLowerCase().includes(value.toLowerCase());
            }
            return false;
          default:
            return true;
        }
      });
    });
  }

  if ((skip ?? 0) > 0 || take !== undefined) {
    result = result.slice(skip, take ? (skip ?? 0) + take : undefined);
  }

  return result;
};
