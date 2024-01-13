import { type TranslatableOptionModel } from '@lib-frontend/core/core.models';
import { type FieldPropsModel, type FieldRefModel } from '@lib-frontend/data/data.models';

export type SelectFieldPropsModel<TType extends string | Array<string> = string> =
  FieldPropsModel<TType> & {
    isHorizontal?: boolean;
    isMultiple?: boolean;
    options: Array<TranslatableOptionModel>;
  };

export type SelectFieldRefModel = FieldRefModel;
