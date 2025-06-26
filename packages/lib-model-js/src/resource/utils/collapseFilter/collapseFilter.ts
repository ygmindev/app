import {
  type CollapseFilterModel,
  type CollapseFilterParamsModel,
} from '@lib/shared/resource/utils/collapseFilter/collapseFilter.models';

export const collapseFilter = <TType extends unknown>(
  params?: CollapseFilterParamsModel<TType>,
): CollapseFilterModel<TType> =>
  params?.map(
    ({
      booleanValue,
      condition,
      dateValue,
      field,
      numberValue,
      resourceArrayValue,
      resourceValue,
      stringArrayValue,
      stringValue,
      value,
    }) => ({
      condition,
      field,
      value:
        value ??
        booleanValue ??
        dateValue ??
        numberValue ??
        resourceValue ??
        resourceArrayValue ??
        stringValue ??
        stringArrayValue,
    }),
  ) ?? [];
