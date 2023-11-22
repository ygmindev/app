import isString from 'lodash/isString';
import reduce from 'lodash/reduce';
import { type ReactElement } from 'react';

import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { type FilterContainerPropsModel } from '#lib-frontend/data/components/FilterContainer/FilterContainer.models';
import { FormContainer } from '#lib-frontend/data/components/FormContainer/FormContainer';
import {
  type FormFieldModel,
  type FormFieldsModel,
  type FormRowModel,
  type FormTileModel,
} from '#lib-frontend/data/components/FormContainer/FormContainer.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type StringKeyModel } from '#lib-shared/core/core.models';
import { type FilterModel } from '#lib-shared/resource/utils/Filter/Filter.models';

export const FilterContainer = <TType, TResult = void>({
  onSubmit,
  ...props
}: LFCPropsModel<FilterContainerPropsModel<TType, TResult>>): ReactElement<
  FilterContainerPropsModel<TType, TResult>
> => {
  const { t } = useTranslation();

  const getFilter = (field: FormFieldsModel<TType>, data: TType): Array<FilterModel<TType>> => {
    const fieldF = field as FormTileModel<TType> | FormRowModel<TType>;
    if (fieldF.fields) {
      return reduce(
        fieldF.fields,
        (result, f) => [...result, ...getFilter(f, data)],
        [] as Array<FilterModel<TType>>,
      );
    }
    const { toFilter } = field as FormFieldModel<TType>;
    const id = field.id as StringKeyModel<TType>;
    const value = data[id];
    const toFilterF = toFilter && toFilter(value, id);
    return toFilterF
      ? isString(toFilterF)
        ? [{ condition: toFilterF, field: id, value }]
        : toFilterF
      : [{ field: id, value }];
  };

  const handleSubmit = async (data: TType): Promise<TResult | null> => {
    let filtersF: Array<FilterModel<TType>> = [];
    if (data) {
      filtersF = props.fields
        ? props.fields.reduce(
            (result, field) => [...result, ...getFilter(field, data)],
            [] as Array<FilterModel<TType>>,
          )
        : [];
    } else {
      filtersF = [];
    }
    return onSubmit ? onSubmit(filtersF) : null;
  };

  return (
    <FormContainer
      {...props}
      isFullHeight
      isFullWidth={false}
      onSubmit={handleSubmit}
      p
      submitLabel={t('core:apply')}
    />
  );
};
