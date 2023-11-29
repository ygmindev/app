import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type FieldRefModel, type ValuePropsModel } from '#lib-frontend/data/data.models';

export type SelectFieldPropsModel<TType extends string | Array<string> = string> =
  ValuePropsModel<TType> &
    (TType extends string ? { isMultiple?: false | undefined } : { isMultiple?: true }) & {
      isHorizontal?: boolean;
      options: Array<TranslatableOptionModel>;
    };

export type SelectFieldRefModel = FieldRefModel;
