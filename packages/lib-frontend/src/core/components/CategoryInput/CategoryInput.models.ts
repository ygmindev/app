import { type TranslatableOptionModel } from '@lib/frontend/core/core.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';
import { type TranslatableTextModel } from '@lib/frontend/locale/locale.models';

export type CategoryInputPropsModel = InputPropsModel & {
  emptyLabel?: TranslatableTextModel;
  id?: string;
  options: Array<TranslatableOptionModel> | (() => Promise<Array<TranslatableOptionModel>>);
};

export type CategoryInputRefModel = InputRefModel;
