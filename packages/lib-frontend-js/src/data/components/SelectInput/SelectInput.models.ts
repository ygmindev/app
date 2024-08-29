import { type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';

export type SelectInputPropsModel<TType extends string | Array<string> = string> =
  InputPropsModel<TType> & {
    isIgnoreAll?: boolean;
    isMultiple?: boolean;
    isSelectAll?: boolean;
    isVertical?: boolean;
    options: Array<TranslatableOptionModel>;
  };

export type SelectInputRefModel = InputRefModel;
