import { type AsyncTextModel, type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';

export type CategoryInputPropsModel = InputPropsModel & {
  emptyLabel?: AsyncTextModel;
  options: Array<TranslatableOptionModel>;
};

export type CategoryInputRefModel = InputRefModel;
