import { type TranslatableOptionModel } from '#lib-frontend/core/core.models';
import { type ValuePropsModel } from '#lib-frontend/data/data.models';

export type RadioFieldPropsModel<TType extends string | Array<string> = string> =
  ValuePropsModel<TType> &
    (TType extends string ? { isMultiple?: false | undefined } : { isMultiple?: true }) & {
      isHorizontal?: boolean;
      options: Array<TranslatableOptionModel>;
    };
