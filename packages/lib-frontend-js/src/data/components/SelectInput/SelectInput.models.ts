import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';
import { type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type ReactNode } from 'react';

export type SelectInputPropsModel<TType extends string | Array<string> = string> =
  InputPropsModel<TType> & {
    isIgnoreAll?: boolean;
    isMultiple?: boolean;
    isSelectAll?: boolean;
    isVertical?: boolean;
    options: Array<SelectInputOptionModel>;
  };

type SelectInputOptionModel = Omit<TranslatableOptionModel, 'label'> & {
  label?: AsyncTextModel | ReactNode;
};

export type SelectInputRefModel = InputRefModel;
