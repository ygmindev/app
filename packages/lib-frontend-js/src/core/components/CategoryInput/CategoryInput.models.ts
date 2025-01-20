import { type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type AsyncTextModel } from '@lib/frontend/core/components/AsyncText/AsyncText.models';

export type CategoryInputPropsModel = InputPropsModel & {
  emptyLabel?: AsyncTextModel;
  options: Array<TranslatableOptionModel>;
};

export type CategoryInputRefModel = InputRefModel;
