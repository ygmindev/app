import {
  type CollapseFilterModel,
  type CollapseFilterParamsModel,
} from '#lib-shared/resource/utils/collapseFilter/collapseFilter.models';

export const collapseFilter = <TType>(
  params: CollapseFilterParamsModel<TType>,
): CollapseFilterModel<TType> =>
  params.map(
    ({
      booleanValue,
      condition,
      dateValue,
      field,
      numberValue,
      resourceValue,
      stringValue,
      value,
    }) => ({
      condition,
      field,
      value: value ?? booleanValue ?? dateValue ?? numberValue ?? resourceValue ?? stringValue,
    }),
  );
