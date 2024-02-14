import { type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';

export type SelectInputPropsModel<TType extends string | Array<string> = string> =
  InputPropsModel<TType> & {
    isMultiple?: boolean;
    isVertical?: boolean;
    options: Array<TranslatableOptionModel>;
  };

export type SelectInputRefModel = InputRefModel;
