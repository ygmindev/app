import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type FieldPropsModel } from '#lib-frontend/data/data.models';

export type SelectFieldPropsModel<TType extends string | Array<string>> = FieldPropsModel<TType> &
  (TType extends string ? { isMultiple?: false | undefined } : { isMultiple?: true }) & {
    isSearchable?: boolean;
    options: Array<TranslatableOptionModel>;
  };
